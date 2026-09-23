import React from 'react';
import { ArrowRight, TrendingUp, TrendingDown, Check, AlertTriangle } from 'lucide-react';

/**
 * FeedbackModal: Animação de transição mostrando o impacto imediato da decisão tomada
 * nas barras de Revolta e Investigação antes de avançar para a próxima etapa.
 */
export const FeedbackModal = ({ isOpen, impactData, onNextStep }) => {
  if (!isOpen || !impactData) return null;

  const isRevoltaUp = impactData.deltaRevolta > 0;
  const isInvestigacaoUp = impactData.deltaInvestigacao > 0;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-pop select-none">
      <div className="relative max-w-md w-full bg-slate-900 border-2 border-slate-700 rounded-3xl p-6 shadow-2xl text-center text-slate-100">
        
        {/* Ícone de Destaque */}
        <div className={`w-14 h-14 mx-auto mb-3 rounded-2xl flex items-center justify-center text-2xl shadow-lg ${
          impactData.type === 'positive'
            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
            : 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
        }`}>
          {impactData.type === 'positive' ? '🛡️' : '💥'}
        </div>

        <h3 className="text-lg font-black uppercase tracking-wider text-slate-100 mb-1">
          {impactData.type === 'positive' ? 'Decisão Estratégica!' : 'A Tensão Aumentou!'}
        </h3>
        <p className="text-xs text-slate-400 mb-5">
          Veja as consequências da escolha para o 7º ano:
        </p>

        {/* Efeitos nas Variáveis */}
        <div className="space-y-2.5 mb-6">
          {/* Revolta */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/80 border border-slate-800">
            <span className="text-xs font-bold text-slate-300">Nível de Revolta:</span>
            <div className="flex items-center gap-1.5 font-mono text-sm font-black">
              {isRevoltaUp ? (
                <>
                  <TrendingUp className="w-4 h-4 text-rose-400" />
                  <span className="text-rose-400">+{impactData.deltaRevolta}%</span>
                </>
              ) : (
                <>
                  <TrendingDown className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">{impactData.deltaRevolta}%</span>
                </>
              )}
            </div>
          </div>

          {/* Investigação */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/80 border border-slate-800">
            <span className="text-xs font-bold text-slate-300">Índice de Investigação:</span>
            <div className="flex items-center gap-1.5 font-mono text-sm font-black">
              {isInvestigacaoUp ? (
                <>
                  <TrendingUp className="w-4 h-4 text-sky-400" />
                  <span className="text-sky-400">+{impactData.deltaInvestigacao}%</span>
                </>
              ) : (
                <>
                  <TrendingDown className="w-4 h-4 text-rose-400" />
                  <span className="text-rose-400">{impactData.deltaInvestigacao}%</span>
                </>
              )}
            </div>
          </div>
        </div>

        <button
          onClick={onNextStep}
          className="w-full py-3 rounded-2xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95"
        >
          <span>Continuar História</span>
          <ArrowRight className="w-4 h-4" />
        </button>

      </div>
    </div>
  );
};
