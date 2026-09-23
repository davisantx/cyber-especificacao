import React, { useState } from 'react';
import { Smartphone, ZoomIn, Play, AlertTriangle, CheckCircle, Volume2, ShieldAlert } from 'lucide-react';

/**
 * EvidenceOverlay: Componente que simula a tela do celular, post do Instagram,
 * áudio recortado do WhatsApp e pistas forenses mencionadas no roteiro.
 */
export const EvidenceOverlay = ({ evidenceType, onClose }) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  if (!evidenceType) return null;

  return (
    <div className="absolute inset-0 z-30 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-pop">
      <div className="relative max-w-lg w-full bg-slate-900/95 border-2 border-sky-400/50 rounded-2xl p-5 shadow-2xl text-slate-100">
        {/* Cabeçalho da Evidência */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-700">
          <div className="flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-sky-400" />
            <span className="text-sm font-bold tracking-wider text-sky-300 uppercase">
              Evidência Digital #01
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-xs px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-300 transition-colors"
          >
            Fechar [X]
          </button>
        </div>

        {/* 1. Post do Instagram: itapipoca_exposed_real */}
        {evidenceType === 'instagram_post' && (
          <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden shadow-inner font-sans">
            {/* Topo do Post */}
            <div className="flex items-center gap-3 p-3 bg-slate-900 border-b border-slate-800">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-rose-500 to-amber-500 flex items-center justify-center text-white font-black text-sm">
                !
              </div>
              <div>
                <p className="text-sm font-bold text-slate-100 flex items-center gap-1.5">
                  @itapipoca_exposed_real
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">Anônimo</span>
                </p>
                <p className="text-[10px] text-slate-400">Publicado há 12 minutos • Itapipoca, CE</p>
              </div>
            </div>

            {/* Imagem do Post com Alerta */}
            <div className="relative bg-slate-900 p-6 flex flex-col items-center justify-center border-b border-slate-800">
              <div className="w-48 h-48 rounded-xl bg-slate-800 border-2 border-dashed border-rose-500/60 flex flex-col items-center justify-center text-center p-4">
                <ShieldAlert className="w-12 h-12 text-rose-500 mb-2 animate-bounce" />
                <span className="text-xs font-bold text-rose-300">FOTO VAZADA NO CENTRO</span>
                <span className="text-[11px] text-slate-400 mt-1">Bia saindo da loja com sacola grande</span>
              </div>
              <span className="mt-3 px-3 py-1 rounded-full bg-rose-600/90 text-white text-xs font-black tracking-wide uppercase">
                🚨 FLAGRA NA CIDADE!
              </span>
            </div>

            {/* Legenda Falsa */}
            <div className="p-3.5 space-y-1.5 text-xs">
              <p className="text-slate-200 leading-relaxed">
                <strong className="text-rose-400">@itapipoca_exposed_real:</strong> ESCÂNDALO NO 7º ANO! Cadê os R$ 160 da rifa do time? A gata foi vista torcendo o dinheiro da sala no centro! Amanhã o time joga descalço! 💣💣
              </p>
              <div className="pt-2 text-[11px] text-rose-400 font-semibold flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Atenção: Perfil anônimo sem comprovação ou autor identificado!</span>
              </div>
            </div>
          </div>
        )}

        {/* 2. Zoom na Sacola da Farmácia */}
        {evidenceType === 'sacola_zoom' && (
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center">
            <h4 className="text-sm font-bold text-sky-400 mb-2">🔎 PERÍCIA DIGITAL: ZOOM NA SACOLA</h4>
            <div className="relative mx-auto w-64 h-56 rounded-xl bg-slate-900 border-2 border-sky-400/50 flex flex-col items-center justify-center overflow-hidden">
              <div className={`transition-all duration-500 flex flex-col items-center ${isZoomed ? 'scale-125' : 'scale-100'}`}>
                {/* Sacola da Farmácia Popular */}
                <svg viewBox="0 0 160 160" className="w-32 h-32">
                  <rect x="30" y="50" width="100" height="90" rx="6" fill="#f8fafc" stroke="#0f172a" strokeWidth="4" />
                  <path d="M55 50 Q80 15 105 50" stroke="#0284c7" strokeWidth="5" fill="none" />
                  <rect x="65" y="75" width="30" height="30" rx="3" fill="#dc2626" />
                  <rect x="75" y="65" width="10" height="50" rx="2" fill="#ffffff" />
                  <rect x="55" y="85" width="50" height="10" rx="2" fill="#ffffff" />
                  <text x="80" y="125" textAnchor="middle" fill="#0369a1" fontSize="10" fontWeight="bold">FARMÁCIA</text>
                </svg>
                <span className="text-[11px] font-bold text-emerald-400 mt-1">
                  Caixas de Remédio para a Avó
                </span>
              </div>
              <button
                onClick={() => setIsZoomed(!isZoomed)}
                className="absolute bottom-2 right-2 px-2.5 py-1 rounded bg-sky-600 hover:bg-sky-500 text-white text-[11px] font-bold flex items-center gap-1 shadow"
              >
                <ZoomIn className="w-3 h-3" />
                {isZoomed ? 'Afastar Zoom' : 'Dar Zoom 2x'}
              </button>
            </div>
            <p className="text-xs text-slate-300 mt-3">
              <strong>Resultado da Análise:</strong> A sacola NÃO é de roupas nem presentes, é da <span className="text-emerald-400 font-bold">Farmácia Popular</span> com remédios de receita médica!
            </p>
          </div>
        )}

        {/* 3. Áudio de 5 Segundos Fatiado */}
        {evidenceType === 'audio_wave' && (
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
            <h4 className="text-sm font-bold text-emerald-400 mb-3 flex items-center gap-2">
              <Volume2 className="w-4 h-4" />
              MENSAGEM DE VOZ ENCAMINHADA (WHATSAPP)
            </h4>

            {/* Balão verde do WhatsApp */}
            <div className="bg-[#054740] p-3.5 rounded-2xl rounded-tl-none border border-emerald-500/30 flex items-center gap-3">
              <button
                onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                className="w-11 h-11 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center font-bold shadow-lg transition-transform active:scale-95"
              >
                <Play className={`w-5 h-5 ml-0.5 ${isPlayingAudio ? 'animate-pulse' : ''}`} />
              </button>

              <div className="flex-1">
                {/* Ondas Sonoras */}
                <div className="flex items-center gap-1 h-8">
                  {[12, 28, 16, 32, 24, 8, 4, 30, 26, 6].map((h, i) => (
                    <div
                      key={i}
                      style={{ height: `${h}px` }}
                      className={`w-1.5 rounded-full ${i >= 6 ? 'bg-rose-500 animate-pulse' : 'bg-emerald-300'}`}
                    />
                  ))}
                  {/* Marcador do corte */}
                  <div className="h-full w-0.5 bg-rose-500 border-r border-dashed border-rose-300 ml-1" />
                </div>
                <div className="flex justify-between text-[10px] text-emerald-200 mt-1">
                  <span>0:03 / 0:05</span>
                  <span className="text-rose-400 font-bold">⚠️ CORTE BRUSCO DETECTADO</span>
                </div>
              </div>
            </div>

            <div className="mt-3 p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-xs text-rose-300">
              <strong>Achado Forense:</strong> Há uma respiração cortada pela metade exatamente aos 03 segundos. A frase final foi intencionalmente eliminada na edição!
            </div>
          </div>
        )}

        {/* 4. Fake Chat Zoom */}
        {evidenceType === 'fake_chat_zoom' && (
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
            <h4 className="text-sm font-bold text-amber-400 mb-2">🔎 COMPARAÇÃO: FAKE CHAT vs OFICIAL</h4>
            <div className="grid grid-cols-2 gap-3 text-center text-xs">
              <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-500/50">
                <span className="font-bold text-rose-400 block mb-1">❌ PRINT POSTADO</span>
                <p className="text-[11px] font-mono text-slate-300 bg-black/40 p-2 rounded">
                  "Os trouxas do 7º ano pagaram..."
                </p>
                <span className="text-[10px] text-rose-300 mt-2 block">Fonte Arial genérica, visto azul desproporcional</span>
              </div>
              <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/50">
                <span className="font-bold text-emerald-400 block mb-1">✅ WHATSAPP REAL</span>
                <p className="text-[11px] font-sans text-slate-300 bg-black/40 p-2 rounded">
                  Padrão do Sistema Android
                </p>
                <span className="text-[10px] text-emerald-300 mt-2 block">Ícones nativos com anti-aliasing</span>
              </div>
            </div>
            <p className="text-xs text-slate-300 mt-3">
              <strong>Conclusão:</strong> Gerado em um aplicativo falso de brincadeira ("Fake Chat Maker") para incriminar a colega!
            </p>
          </div>
        )}

        {/* 5. Chuteira no Story */}
        {evidenceType === 'chuteira_clue' && (
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center">
            <h4 className="text-sm font-bold text-sky-400 mb-2">👟 DETALHE FORENSE DO STORY</h4>
            <div className="mx-auto w-64 h-48 rounded-xl bg-slate-900 border-2 border-rose-500/60 flex flex-col items-center justify-center p-3 relative">
              <div className="w-full text-center mb-1 text-[11px] text-slate-400">Story do perfil anônimo:</div>
              {/* Ilustração da chuteira vermelha com cadarço verde limão */}
              <svg viewBox="0 0 180 100" className="w-40 h-24">
                {/* Chuteira vermelha */}
                <path d="M20 75 Q40 40 80 50 L140 60 Q160 65 160 80 L20 80 Z" fill="#dc2626" stroke="#0f172a" strokeWidth="4" />
                {/* Cravos da sola */}
                <rect x="30" y="80" width="10" height="8" rx="2" fill="#0f172a" />
                <rect x="60" y="80" width="10" height="8" rx="2" fill="#0f172a" />
                <rect x="130" y="80" width="10" height="8" rx="2" fill="#0f172a" />
                {/* Cadarço Verde-Limão fluorescente chamativo */}
                <path d="M75 50 L90 62 M85 48 L100 60 M95 48 L110 60" stroke="#84cc16" strokeWidth="5" strokeLinecap="round" />
              </svg>
              <span className="px-2 py-0.5 rounded bg-lime-400 text-slate-950 font-extrabold text-[11px] shadow">
                PISTA CHAVE ENCONTRADA!
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-2.5">
              Essa chuteira exclusiva vermelha com cadarço verde-limão é a do <strong>Igor, zagueiro do 8º B</strong>!
            </p>
          </div>
        )}

        {/* 6. Envelope Recuperado */}
        {evidenceType === 'envelope_achado' && (
          <div className="bg-slate-950 p-5 rounded-xl border border-emerald-500/60 text-center">
            <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-2 animate-bounce" />
            <h4 className="text-base font-black text-emerald-400">ENVELOPE RECUPERADO COM SUCESSO!</h4>
            <div className="my-3 p-3 rounded-lg bg-amber-500/10 border border-amber-500/40 inline-block">
              <span className="text-lg font-black text-amber-300 font-mono">💵 R$ 160,00 INTACTOS</span>
            </div>
            <p className="text-xs text-slate-200">
              O envelope lacrado da rifa estava escondido no armário sob o banco do vestiário. A inocência da Bia está comprovada diante de todos!
            </p>
          </div>
        )}

        {/* Botão de Fechar inferior */}
        <button
          onClick={onClose}
          className="mt-4 w-full py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs tracking-wider uppercase transition-colors"
        >
          Voltar para a Decisão
        </button>
      </div>
    </div>
  );
};
