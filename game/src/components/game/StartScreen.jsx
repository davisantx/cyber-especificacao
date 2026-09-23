import React, { useState } from 'react';
import { Play, Sparkles, HelpCircle, ShieldAlert, X } from 'lucide-react';
import { CharacterSprite } from '../sprites/CharacterSprite';

/**
 * StartScreen: Tela de início estilo arcade / 16-bits clássico dos anos 90
 * (como Bomberman, Contra, Mega Man e jogos de fliperama).
 */
export const StartScreen = ({ onStartGame }) => {
  const [showSynopsis, setShowSynopsis] = useState(false);

  // Efeito sonoro retrô ao clicar em opções
  const playRetroBeep = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(880, ctx.currentTime);
        osc.frequency.setValueAtTime(1760, ctx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.25);
      }
    } catch (e) {
      // Audio fallback
    }
  };

  const handleStart = () => {
    playRetroBeep();
    onStartGame();
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black flex flex-col justify-between items-center p-6 select-none font-mono text-slate-100">
      
      {/* 1. Efeito CRT Scanlines e Grade Retro no Fundo */}
      <div className="absolute inset-0 crt-scanlines pointer-events-none z-30 opacity-60" />
      
      {/* Fundo Espacial / Grade Synthwave Retrô */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/40 via-slate-950 to-blue-950/60 z-0" />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 retro-grid opacity-40 z-0" />

      {/* Partículas de estrelas retrô no céu */}
      <div className="absolute top-8 left-12 text-yellow-300 text-xs animate-pulse">★</div>
      <div className="absolute top-20 right-24 text-yellow-300 text-sm animate-pulse">✦</div>
      <div className="absolute top-44 left-1/4 text-sky-400 text-xs animate-ping">★</div>
      <div className="absolute top-16 right-1/3 text-purple-300 text-xs animate-pulse">✦</div>

      {/* 2. Topo: Apresentação Estilo Arcade Japonês / Konami */}
      <div className="relative z-10 text-center pt-2">
        <div className="inline-block px-4 py-1 border-2 border-yellow-500/80 bg-black/80 shadow-[0_0_15px_rgba(234,179,8,0.5)]">
          <p className="text-[11px] md:text-xs font-black tracking-widest text-yellow-400 uppercase">
            ★ IFCE ITAPIPOCA ADS ENTERTAINMENT SYSTEM ★
          </p>
        </div>
      </div>

      {/* 3. Centro: Logotipo Gigante Retrô "OPERAÇÃO CAMISA 10" */}
      <div className="relative z-10 flex flex-col items-center justify-center my-auto animate-float-logo">
        
        {/* Palavra "OPERAÇÃO" em Neon Ciano com Faixa */}
        <div className="relative flex items-center justify-center gap-3 mb-1">
          <span className="text-sky-400 text-xl md:text-2xl">◆</span>
          <span className="text-xl md:text-3xl font-black tracking-[0.3em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-200 to-sky-400 retro-neon-cyan">
            OPERAÇÃO
          </span>
          <span className="text-sky-400 text-xl md:text-2xl">◆</span>
        </div>

        {/* Título Principal "CAMISA 10" em Letras 3D Douradas Arcade */}
        <div className="relative">
          <h1 className="text-6xl sm:text-7xl md:text-9xl font-black tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 via-amber-400 to-orange-600 retro-title-3d filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]">
            CAMISA 10
          </h1>
          {/* Brilho da estrela na letra */}
          <span className="absolute -top-3 right-6 text-yellow-200 text-2xl md:text-4xl animate-spin" style={{ animationDuration: '4s' }}>
            ✦
          </span>
        </div>

        {/* Banner Dourado com Subtítulo */}
        <div className="mt-2 px-6 py-1.5 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 border-2 border-yellow-300 shadow-[0_0_20px_rgba(245,158,11,0.6)] transform -rotate-1">
          <p className="text-xs sm:text-sm md:text-base font-black tracking-widest text-black uppercase">
            ⚽ O MISTÉRIO DA RIFA DO INTERCLASSES ⚽
          </p>
        </div>

        {/* 4. Menu Retrô Piscante "PRESS START" */}
        <div className="mt-10 md:mt-12 flex flex-col items-center gap-4">
          
          <button
            onClick={handleStart}
            className="group relative px-8 py-3.5 bg-yellow-400 hover:bg-yellow-300 text-black font-black text-lg md:text-2xl tracking-widest uppercase border-4 border-black shadow-[6px_6px_0px_#ca8a04] hover:shadow-[2px_2px_0px_#ca8a04] hover:translate-x-1 hover:translate-y-1 transition-all active:scale-95 animate-blink-retro"
          >
            <div className="flex items-center gap-3">
              <span className="text-red-600">▶</span>
              <span>1 PLAYER START</span>
              <span className="text-red-600">◀</span>
            </div>
          </button>

          <button
            onClick={() => { playRetroBeep(); setShowSynopsis(true); }}
            className="px-4 py-1.5 bg-slate-900/80 hover:bg-slate-800 border-2 border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-300 text-xs font-bold tracking-wider uppercase transition-colors"
          >
            [?] HISTÓRIA & REGRAS
          </button>

        </div>

      </div>

      {/* 5. Rodapé Retrô: Créditos Arcade e Direitos */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 border-t border-slate-800/80 pt-3 gap-2">
        <div className="flex items-center gap-4 font-mono">
          <span className="text-yellow-400 font-black animate-pulse">● INSERT COIN</span>
          <span className="text-slate-500">CREDIT: 01</span>
        </div>

        <div className="text-center sm:text-right">
          <p className="text-slate-300 font-bold">
            © 2026 IFCE ITAPIPOCA • CST EM ADS
          </p>
          <p className="text-[10px] text-slate-500">
            PROJETO DE EXTENSÃO: BYTES PARA CIDADANIA
          </p>
        </div>
      </div>

      {/* Modal Retrô de Sinopse (se o usuário clicar em História & Regras) */}
      {showSynopsis && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-pop">
          <div className="max-w-lg w-full bg-slate-950 border-4 border-yellow-400 p-6 shadow-[10px_10px_0px_rgba(202,138,4,0.6)] text-left">
            
            <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-yellow-400/60">
              <div className="flex items-center gap-2 text-yellow-400 font-black text-sm uppercase">
                <ShieldAlert className="w-5 h-5" />
                <span>MISSION BRIEFING: 7º ANO</span>
              </div>
              <button
                onClick={() => setShowSynopsis(false)}
                className="text-yellow-400 hover:text-white font-black text-sm px-2 py-0.5 border border-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors"
              >
                [X]
              </button>
            </div>

            <div className="space-y-3 text-xs md:text-sm text-slate-200 leading-relaxed font-sans">
              <p>
                <strong>O CASO:</strong> Um perfil fake de fofoca postou que a <strong>Bia</strong> roubou os <strong>R$ 160</strong> da rifa da sala para gastar no centro de Itapipoca!
              </p>
              <p>
                <strong>O RISCO:</strong> A semifinal do Interclasses de Futsal é amanhã de manhã. Se a verdade não for descoberta antes do sinal da saída, o time será desclassificado por briga!
              </p>
              <p>
                <strong>SUA MISSÃO:</strong> Analisar fotos, mensagens, testemunhas e desmascarar a farsa com cidadania e solidariedade!
              </p>
            </div>

            <button
              onClick={() => setShowSynopsis(false)}
              className="mt-6 w-full py-2.5 bg-yellow-400 hover:bg-yellow-300 text-black font-black text-xs uppercase tracking-wider transition-colors"
            >
              FECHAR E VOLTAR AO MENU
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
