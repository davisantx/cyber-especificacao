import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Trophy, AlertOctagon, Scale, ArrowRight, RotateCcw } from 'lucide-react';
import { GAME_SCRIPT } from '../../data/gameData';

/**
 * EndGameScreen: Tela cinematográfica de desfecho da jornada escolar.
 * Dispara confetes no Good Ending e calcula o resultado baseado nas escolhas.
 */
export const EndGameScreen = ({ stats, onGoToEvaluation, onRestart }) => {
  // Lógica de cálculo do final
  const calculateEnding = () => {
    if (stats.investigacao >= 65 && stats.revolta < 55) {
      return GAME_SCRIPT.endings.good;
    }
    if (stats.revolta >= 65 || stats.investigacao < 40) {
      return GAME_SCRIPT.endings.bad;
    }
    return GAME_SCRIPT.endings.neutral;
  };

  const ending = calculateEnding();

  // Se for o Good Ending, joga confetes coloridos!
  useEffect(() => {
    if (ending.id === 'good') {
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // Fallback caso canvas-confetti não esteja disponível
      }
    }
  }, [ending]);

  return (
    <div className="relative z-30 w-full min-h-screen flex items-center justify-center p-4 select-none">
      <div className="max-w-2xl w-full bg-slate-950/95 border-2 border-slate-700/80 rounded-3xl p-6 md:p-8 shadow-2xl text-center text-slate-100 animate-pop">
        
        {/* Banner do Tipo de Final */}
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs md:text-sm font-black uppercase tracking-wider mb-4 shadow-lg ${
          ending.id === 'good'
            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/50'
            : ending.id === 'bad'
            ? 'bg-rose-500/20 text-rose-300 border border-rose-400/50'
            : 'bg-amber-500/20 text-amber-300 border border-amber-400/50'
        }`}>
          {ending.id === 'good' && <Trophy className="w-5 h-5 text-emerald-400" />}
          {ending.id === 'bad' && <AlertOctagon className="w-5 h-5 text-rose-400" />}
          {ending.id === 'neutral' && <Scale className="w-5 h-5 text-amber-400" />}
          <span>{ending.bannerText}</span>
        </div>

        {/* Título do Desfecho */}
        <h2 className="text-xl md:text-3xl font-black text-slate-100 mb-4 leading-tight">
          {ending.title}
        </h2>

        {/* Narrativa do Desfecho */}
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 text-left mb-6">
          <p className="text-sm md:text-base text-slate-200 leading-relaxed">
            {ending.description}
          </p>
        </div>

        {/* Estatísticas Finais da Sala */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
            <span className="text-xs text-slate-400 font-bold block mb-1">Revolta Final</span>
            <span className={`text-xl font-black font-mono ${stats.revolta >= 60 ? 'text-rose-400' : 'text-emerald-400'}`}>
              {stats.revolta}%
            </span>
          </div>

          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
            <span className="text-xs text-slate-400 font-bold block mb-1">Índice de Verdade</span>
            <span className="text-xl font-black font-mono text-sky-400">
              {stats.investigacao}%
            </span>
          </div>
        </div>

        {/* Botões de Ação */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={onRestart}
            className="sm:w-1/3 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold flex items-center justify-center gap-2 border border-slate-700 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Jogar Novamente</span>
          </button>

          <button
            onClick={onGoToEvaluation}
            className="sm:w-2/3 py-3.5 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 text-sm font-black tracking-wide uppercase flex items-center justify-center gap-2 shadow-xl hover:shadow-teal-500/30 transition-transform active:scale-95"
          >
            <span>Responder Avaliação da Turma (Meta 4.3)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
