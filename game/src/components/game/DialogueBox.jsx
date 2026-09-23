import React from 'react';
import { Eye, ChevronRight, HelpCircle } from 'lucide-react';

const SPEAKER_META = {
  bia: { name: "Bia", role: "7º Ano", badge: "bg-sky-600 text-white" },
  caua: { name: "Cauã", role: "7º Ano", badge: "bg-emerald-600 text-white" },
  leo: { name: "Léo", role: "7º Ano", badge: "bg-rose-600 text-white" },
  igor: { name: "Igor", role: "8º Ano B", badge: "bg-orange-600 text-white" },
  socorro: { name: "Dona Socorro", role: "Cantina", badge: "bg-pink-600 text-white" },
  raimundo: { name: "Seu Raimundo", role: "Inspetor", badge: "bg-lime-700 text-white" },
  diretor: { name: "Diretor", role: "Coordenação", badge: "bg-purple-700 text-white" },
};

/**
 * DialogueBox: Caixa de diálogo compacta estilo Visual Novel moderno (como Ace Attorney / Persona).
 * Fica acoplada no rodapé sem cobrir a cena, com o nome do personagem destacado.
 */
export const DialogueBox = ({
  decision,
  onSelectOption,
  onOpenEvidence,
  onOpenMediator,
}) => {
  if (!decision) return null;

  const speaker = SPEAKER_META[decision.character] || SPEAKER_META.bia;

  return (
    <div className="relative z-30 w-full px-4 md:px-8 pb-3 select-none">
      <div className="max-w-5xl mx-auto">
        
        {/* Aba com o Nome do Personagem Falante (Estilo Visual Novel clássico) */}
        <div className="flex items-center justify-between mb-[-2px] pl-3 pr-2 relative z-10">
          <div className="flex items-center gap-2">
            <div className={`px-3.5 py-1 rounded-t-xl text-xs font-black uppercase tracking-wider shadow-md ${speaker.badge}`}>
              {speaker.name} <span className="opacity-75 text-[10px] font-semibold">({speaker.role})</span>
            </div>
            <span className="px-2 py-0.5 rounded-t-lg bg-slate-900/90 text-teal-300 border border-b-0 border-slate-700 text-[10px] font-mono font-bold">
              Decisão #{decision.id.toString().padStart(2, '0')}
            </span>
          </div>

          <div className="flex items-center gap-2 pb-1">
            {decision.evidence && (
              <button
                onClick={onOpenEvidence}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 hover:bg-sky-500/30 border border-sky-400/50 text-sky-300 text-xs font-bold transition-all active:scale-95 animate-pulse shadow"
              >
                <Eye className="w-3.5 h-3.5 text-sky-400" />
                <span>Ver Evidência</span>
              </button>
            )}

            <button
              onClick={onOpenMediator}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 text-xs font-bold border border-slate-700 transition-colors"
            >
              <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>Dica</span>
            </button>
          </div>
        </div>

        {/* Caixa Principal de Diálogo e Escolhas */}
        <div className="bg-slate-950/95 backdrop-blur-xl border-2 border-slate-700 rounded-2xl rounded-tl-none p-3.5 md:p-4 shadow-2xl">
          
          {/* Narrativa do Cenário */}
          <p className="text-xs sm:text-sm md:text-base text-slate-100 leading-relaxed mb-3 font-normal">
            {decision.scenario}
          </p>

          {/* As 2 Opções de Escolha Compactas e Nítidas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            
            {/* Opção [A] */}
            <button
              onClick={() => onSelectOption('A')}
              className="group flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-900 hover:bg-teal-950/70 border border-slate-700 hover:border-teal-400 text-left transition-all duration-150 shadow-md active:scale-[0.99]"
            >
              <span className="px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/40 text-xs font-black shrink-0">
                [A]
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm font-semibold text-slate-100 group-hover:text-teal-100 leading-snug">
                  {decision.optA.text}
                </p>
                <span className="text-[10px] font-mono font-medium text-emerald-400 mt-1 block">
                  {decision.optA.impact}
                </span>
              </div>
            </button>

            {/* Opção [B] */}
            <button
              onClick={() => onSelectOption('B')}
              className="group flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-900 hover:bg-rose-950/70 border border-slate-700 hover:border-rose-400 text-left transition-all duration-150 shadow-md active:scale-[0.99]"
            >
              <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/40 text-xs font-black shrink-0">
                [B]
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm font-semibold text-slate-100 group-hover:text-rose-100 leading-snug">
                  {decision.optB.text}
                </p>
                <span className="text-[10px] font-mono font-medium text-rose-400 mt-1 block">
                  {decision.optB.impact}
                </span>
              </div>
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};
