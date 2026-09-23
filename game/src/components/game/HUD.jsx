import React from 'react';
import { AlertCircle, Search, HelpCircle, Shield, Sparkles } from 'lucide-react';

/**
 * HUD: Barra superior com os dois medidores vitais em tempo real:
 * - Nível de Revolta da Sala (0% a 100%)
 * - Índice de Investigação & Verdade (0% a 100%)
 * Otimizado para legibilidade à distância em projetores de escolas.
 */
export const HUD = ({
  revolta = 35,
  investigacao = 10,
  currentStep = 1,
  totalSteps = 25,
  actTitle = '',
  onOpenMediator
}) => {
  // Limites visuais de 0 a 100
  const clampedRevolta = Math.min(100, Math.max(0, revolta));
  const clampedInvestigacao = Math.min(100, Math.max(0, investigacao));

  // Cores dinâmicas para a barra de revolta
  const getRevoltaColor = () => {
    if (clampedRevolta >= 70) return 'from-red-600 via-rose-600 to-red-500 animate-pulse';
    if (clampedRevolta >= 45) return 'from-amber-500 to-rose-500';
    return 'from-emerald-500 to-teal-500';
  };

  return (
    <header className="relative z-20 w-full px-4 py-2.5 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        
        {/* Esquerda: Identificação da Missão e Ato */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-300 font-black text-sm shadow-inner">
              ⚽
            </div>
            <div>
              <h1 className="text-xs md:text-sm font-black tracking-wider text-slate-100 uppercase">
                Operação Camisa 10
              </h1>
              <p className="text-[10px] md:text-xs text-slate-400 truncate max-w-[260px] sm:max-w-sm">
                {actTitle.split('—')[0] || actTitle}
              </p>
            </div>
          </div>

          <div className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono font-bold text-teal-300">
            {currentStep.toString().padStart(2, '0')}/{totalSteps}
          </div>
        </div>

        {/* Centro: Os 2 Medidores em Tempo Real */}
        <div className="grid grid-cols-2 gap-3 w-full md:w-[540px]">
          
          {/* Medidor 1: Nível de Revolta da Sala */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-2 shadow-sm">
            <div className="flex items-center justify-between text-[11px] font-bold mb-1">
              <span className="flex items-center gap-1.5 text-rose-300 uppercase tracking-wider">
                <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
                Revolta da Sala
              </span>
              <span className={`font-mono text-xs ${clampedRevolta >= 70 ? 'text-rose-400 font-black animate-pulse' : 'text-slate-300'}`}>
                {clampedRevolta}%
              </span>
            </div>
            {/* Barra de Progresso */}
            <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-800">
              <div
                className={`h-full rounded-full transition-all duration-700 bg-gradient-to-r ${getRevoltaColor()}`}
                style={{ width: `${clampedRevolta}%` }}
              />
            </div>
          </div>

          {/* Medidor 2: Índice de Investigação & Verdade */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-2 shadow-sm">
            <div className="flex items-center justify-between text-[11px] font-bold mb-1">
              <span className="flex items-center gap-1.5 text-sky-300 uppercase tracking-wider">
                <Search className="w-3.5 h-3.5 text-sky-400" />
                Investigação
              </span>
              <span className="font-mono text-xs text-sky-300 font-black">
                {clampedInvestigacao}%
              </span>
            </div>
            {/* Barra de Progresso */}
            <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-800">
              <div
                className="h-full rounded-full transition-all duration-700 bg-gradient-to-r from-sky-500 via-teal-400 to-emerald-400"
                style={{ width: `${clampedInvestigacao}%` }}
              />
            </div>
          </div>

        </div>

        {/* Direita: Botão de Apoio Pedagógico (Mediador de ADS) */}
        <div className="hidden lg:flex items-center gap-2">
          <button
            onClick={onOpenMediator}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold transition-all shadow-sm active:scale-95"
            title="Dica pedagógica para puxar debate na sala"
          >
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span>Dica do Mediador</span>
          </button>
        </div>

      </div>
    </header>
  );
};
