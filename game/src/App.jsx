import React, { useState, useEffect } from 'react';
import { GAME_SCRIPT } from './data/gameData';
import { HUD } from './components/game/HUD';
import { GameStage } from './components/game/GameStage';
import { FeedbackModal } from './components/game/FeedbackModal';
import { StartScreen } from './components/game/StartScreen';
import { EndGameScreen } from './components/game/EndGameScreen';
import { EvaluationScreen } from './components/game/EvaluationScreen';

// Síntese de Efeitos Sonoros com Web Audio API (100% offline, sem arquivos externos)
class SoundFX {
  static ctx = null;

  static init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
  }

  static playTone(freq, type = 'sine', duration = 0.15, vol = 0.2) {
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(vol, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Audio silenciado
    }
  }

  static playSuccess() {
    this.playTone(523.25, 'triangle', 0.1, 0.25); // C5
    setTimeout(() => this.playTone(659.25, 'triangle', 0.15, 0.25), 100); // E5
    setTimeout(() => this.playTone(783.99, 'triangle', 0.25, 0.3), 200); // G5
  }

  static playAlert() {
    this.playTone(220, 'sawtooth', 0.2, 0.25);
    setTimeout(() => this.playTone(180, 'sawtooth', 0.3, 0.25), 150);
  }

  static playVictory() {
    [523, 659, 783, 1046].forEach((f, i) => {
      setTimeout(() => this.playTone(f, 'sine', 0.3, 0.3), i * 150);
    });
  }
}

export default function App() {
  // Estados do Jogo
  const [phase, setPhase] = useState('START'); // 'START' | 'STAGE' | 'ENDING' | 'EVALUATION'
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [stats, setStats] = useState(GAME_SCRIPT.initialStats);

  // Modais de Controle
  const [feedbackData, setFeedbackData] = useState(null);
  const [isMediatorOpen, setIsMediatorOpen] = useState(false);

  const currentDecision = GAME_SCRIPT.decisions[currentStepIndex];

  // Iniciar o Jogo
  const handleStartGame = () => {
    SoundFX.init();
    SoundFX.playSuccess();
    setStats(GAME_SCRIPT.initialStats);
    setCurrentStepIndex(0);
    setPhase('STAGE');
  };

  // Processamento da Escolha da Decisão (Opção A ou Opção B)
  const handleSelectOption = (optionKey) => {
    const choice = optionKey === 'A' ? currentDecision.optA : currentDecision.optB;
    
    // Atualiza estatísticas com limites de 0 a 100%
    setStats((prev) => ({
      revolta: Math.min(100, Math.max(0, prev.revolta + choice.deltaRevolta)),
      investigacao: Math.min(100, Math.max(0, prev.investigacao + choice.deltaInvestigacao))
    }));

    if (choice.type === 'positive') {
      SoundFX.playSuccess();
    } else {
      SoundFX.playAlert();
    }

    setFeedbackData(choice);
  };

  // Avanço após o Feedback da Decisão
  const handleNextStep = () => {
    setFeedbackData(null);
    const nextIndex = currentStepIndex + 1;

    if (nextIndex < GAME_SCRIPT.decisions.length) {
      setCurrentStepIndex(nextIndex);
    } else {
      // Chegou ao fim das 25 decisões!
      SoundFX.playVictory();
      setPhase('ENDING');
    }
  };

  // Reiniciar jogo
  const handleRestart = () => {
    setPhase('START');
    setCurrentStepIndex(0);
    setStats(GAME_SCRIPT.initialStats);
    setFeedbackData(null);
  };

  // Atalho de teclado 'M' para abrir o Painel do Mediador
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'm' || e.key === 'M') {
        setIsMediatorOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-slate-950 font-sans text-slate-100 select-none">
      
      {/* 1. TELA INICIAL */}
      {phase === 'START' && (
        <StartScreen onStartGame={handleStartGame} />
      )}

      {/* 2. PALCO DO JOGO (GAME STAGE) */}
      {phase === 'STAGE' && currentDecision && (
        <div className="relative w-full h-full flex flex-col justify-between">
          {/* HUD Superior com Medidores */}
          <HUD
            revolta={stats.revolta}
            investigacao={stats.investigacao}
            currentStep={currentDecision.id}
            totalSteps={GAME_SCRIPT.decisions.length}
            actTitle={currentDecision.act}
            onOpenMediator={() => setIsMediatorOpen(true)}
          />

          {/* O Palco Visual com Cenário, Sprites e Diálogo */}
          <div className="relative flex-1 w-full overflow-hidden">
            <GameStage
              decision={currentDecision}
              onSelectOption={handleSelectOption}
              isMediatorOpen={isMediatorOpen}
              onOpenMediator={() => setIsMediatorOpen(true)}
              onCloseMediator={() => setIsMediatorOpen(false)}
            />
          </div>

          {/* Modal de Consequência/Impacto */}
          <FeedbackModal
            isOpen={!!feedbackData}
            impactData={feedbackData}
            onNextStep={handleNextStep}
          />
        </div>
      )}

      {/* 3. TELA DE FINAIS (DESFECHO CINEMATOGRÁFICO) */}
      {phase === 'ENDING' && (
        <EndGameScreen
          stats={stats}
          onGoToEvaluation={() => setPhase('EVALUATION')}
          onRestart={handleRestart}
        />
      )}

      {/* 4. TELA DE AVALIAÇÃO DA APRENDIZAGEM (META 4.3) */}
      {phase === 'EVALUATION' && (
        <EvaluationScreen
          stats={stats}
          onRestart={handleRestart}
        />
      )}

    </div>
  );
}
