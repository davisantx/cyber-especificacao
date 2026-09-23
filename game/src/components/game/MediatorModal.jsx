import React from 'react';
import { HelpCircle, MessageSquare, Lightbulb, X } from 'lucide-react';

/**
 * MediatorModal: Modal exclusivo para o mediador de ADS (equipe do projeto social)
 * consultar as reflexões pedagógicas recomendadas no roteiro antes ou depois do voto.
 */
export const MediatorModal = ({ isOpen, onClose, tip, currentStepTitle }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-pop">
      <div className="relative max-w-lg w-full bg-slate-900 border-2 border-amber-500/50 rounded-2xl p-6 shadow-2xl text-slate-100">
        
        {/* Cabeçalho */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2 text-amber-400">
            <Lightbulb className="w-5 h-5" />
            <h3 className="text-sm md:text-base font-black uppercase tracking-wider">
              Guia do Mediador de ADS
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cenário Atual */}
        <div className="my-3 text-xs text-slate-400">
          <strong>Ponto de Mediação:</strong> {currentStepTitle}
        </div>

        {/* Dica Pedagógica do Roteiro */}
        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 my-4 space-y-2">
          <div className="flex items-center gap-2 text-amber-300 font-bold text-xs">
            <MessageSquare className="w-4 h-4" />
            <span>Pergunta Provocadora para a Sala:</span>
          </div>
          <p className="text-sm md:text-base font-medium text-amber-100 leading-relaxed italic">
            "{tip || "Como essa situação se conecta com o dia a dia de vocês nas redes sociais?"}"
          </p>
        </div>

        <p className="text-[11px] text-slate-400 leading-normal mb-4">
          💡 <strong>Dica de Dinâmica:</strong> Peça para 2 ou 3 alunos levantarem a mão rapidamente antes de bater o martelo na decisão. Use o debate para fixar o conceito de Cidadania Digital da BNCC.
        </p>

        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs tracking-wider uppercase transition-transform active:scale-95 shadow-md"
        >
          Entendido! Voltar ao Jogo
        </button>
      </div>
    </div>
  );
};
