import React, { useMemo } from 'react';
import { createAvatar } from '@dicebear/core';
import * as adventurer from '@dicebear/adventurer';

// Mapeamento preciso de emoções do DiceBear Adventurer para a Bia
const BIA_EMOTION_MAP = {
  calm: { eyes: 'variant01', brows: 'variant08', mouth: 'variant01', blush: false },
  panicked: { eyes: 'variant08', brows: 'variant03', mouth: 'variant14', blush: false },
  crying: { eyes: 'variant20', brows: 'variant07', mouth: 'variant25', blush: false },
  crying_caught: { eyes: 'variant20', brows: 'variant07', mouth: 'variant15', blush: false },
  furious: { eyes: 'variant14', brows: 'variant05', mouth: 'variant24', blush: false },
  smug: { eyes: 'variant17', brows: 'variant11', mouth: 'variant20', blush: false },
  confident: { eyes: 'variant12', brows: 'variant02', mouth: 'variant23', blush: false },
  investigating: { eyes: 'variant05', brows: 'variant15', mouth: 'variant09', blush: false },
  doubtful: { eyes: 'variant06', brows: 'variant11', mouth: 'variant04', blush: false },
  hopeful: { eyes: 'variant24', brows: 'variant06', mouth: 'variant27', blush: false },
  relieved: { eyes: 'variant19', brows: 'variant08', mouth: 'variant01', blush: false },
  champion: { eyes: 'variant23', brows: 'variant06', mouth: 'variant30', blush: false },
  ashamed: { eyes: 'variant18', brows: 'variant03', mouth: 'variant04', blush: true },
  // Aliases secundários presentes no roteiro
  serious: { eyes: 'variant12', brows: 'variant01', mouth: 'variant09', blush: false },
  firm_witness: { eyes: 'variant01', brows: 'variant02', mouth: 'variant01', blush: false },
  observant: { eyes: 'variant05', brows: 'variant08', mouth: 'variant01', blush: false },
};

/**
 * CharacterSprite: Sprites cartoon modernos, elegantes e expressivos.
 * Integra avatares procedurais do DiceBear Adventurer com torsos e uniformes temáticos.
 */
export const CharacterSprite = ({ character = 'bia', emotion = 'calm', speaking = false }) => {
  const charMeta = {
    bia: {
      name: "Bia",
      role: "Responsável pela Rifa",
      badgeColor: "bg-sky-500 text-white",
      borderColor: "border-sky-400"
    },
    caua: {
      name: "Cauã",
      role: "Amigo & Investigador",
      badgeColor: "bg-emerald-500 text-white",
      borderColor: "border-emerald-400"
    },
    leo: {
      name: "Léo",
      role: "Colega da Turma",
      badgeColor: "bg-rose-500 text-white",
      borderColor: "border-rose-400"
    },
    igor: {
      name: "Igor",
      role: "Zagueiro do 8º B",
      badgeColor: "bg-orange-500 text-white",
      borderColor: "border-orange-400"
    },
    socorro: {
      name: "Dona Socorro",
      role: "Merendeira",
      badgeColor: "bg-pink-500 text-white",
      borderColor: "border-pink-400"
    },
    raimundo: {
      name: "Seu Raimundo",
      role: "Inspetor de Pátio",
      badgeColor: "bg-lime-600 text-white",
      borderColor: "border-lime-400"
    },
    diretor: {
      name: "Diretor",
      role: "Direção da Escola",
      badgeColor: "bg-purple-600 text-white",
      borderColor: "border-purple-400"
    }
  };

  const meta = charMeta[character] || charMeta.bia;

  // Memoização do avatar DiceBear para a Bia (100% offline via bundle)
  const biaEmotion = BIA_EMOTION_MAP[emotion] || BIA_EMOTION_MAP.calm;
  const biaAvatarSvg = useMemo(() => {
    if (character !== 'bia') return null;
    return createAvatar(adventurer, {
      seed: 'BiaCamisa10',
      hair: ['long19'],
      hairColor: ['562306'],
      skinColor: ['f2d3b1'],
      eyes: [biaEmotion.eyes],
      eyebrows: [biaEmotion.brows],
      mouth: [biaEmotion.mouth],
      features: biaEmotion.blush ? ['blush'] : [],
      featuresProbability: biaEmotion.blush ? 100 : 0,
      earringsProbability: 0,
      glassesProbability: 0,
    }).toString();
  }, [character, biaEmotion]);

  // Renderização Vetorial Estilizada e Atraente
  const renderCharacterSvg = () => {
    switch (character) {
      // ==========================================
      // BIA: Estudante simpática, rabo de cavalo
      // ==========================================
      case 'bia': {
        const isChampion = emotion === 'champion';
        return (
          <div className="relative w-full h-full flex flex-col items-center justify-end overflow-visible">
            {/* Cabeça Procedural DiceBear Adventurer */}
            <div 
              className="relative z-10 w-[175px] sm:w-[190px] h-[175px] sm:h-[190px] mb-[-34px] filter drop-shadow-md pointer-events-none"
              dangerouslySetInnerHTML={{ __html: biaAvatarSvg }}
            />
            {/* Torso Vetorial com Uniforme Escolar / Capitã */}
            <div className="relative z-0 w-[200px] sm:w-[220px] h-[105px]">
              <svg viewBox="0 0 200 105" className="w-full h-full overflow-visible drop-shadow-xl">
                {/* Corpo / Camisa */}
                <path
                  d="M40 10 Q100 -2 160 10 L180 105 L20 105 Z"
                  fill={isChampion ? "#1d4ed8" : "#f0f9ff"}
                  stroke="#0f172a"
                  strokeWidth="3.5"
                />
                {isChampion ? (
                  <>
                    <polygon points="85,8 100,34 115,8" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />
                    <circle cx="100" cy="66" r="17" fill="#1e3a8a" stroke="#fbbf24" strokeWidth="2.5" />
                    <text x="100" y="73" textAnchor="middle" fill="#fbbf24" fontSize="17" fontWeight="900" fontFamily="monospace">10</text>
                    {/* Faixa de capitã */}
                    <rect x="136" y="44" width="30" height="15" rx="3" fill="#fbbf24" stroke="#b45309" strokeWidth="1.5" />
                    <text x="151" y="55" textAnchor="middle" fill="#78350f" fontSize="7.5" fontWeight="bold">CAPITÃ</text>
                  </>
                ) : (
                  <>
                    {/* Gola Azul e Botões */}
                    <polygon points="85,8 100,32 115,8" fill="#38bdf8" />
                    <circle cx="100" cy="50" r="3.5" fill="#0284c7" />
                    <circle cx="100" cy="72" r="3.5" fill="#0284c7" />
                    <text x="54" y="52" fill="#0369a1" fontSize="11" fontWeight="bold">7º A</text>
                  </>
                )}
              </svg>
            </div>
          </div>
        );
      }

      // ==========================================
      // CAUÃ: Cabelo estiloso, óculos, casaco verde
      // ==========================================
      case 'caua':
        return (
          <svg viewBox="0 0 240 280" className="w-full h-full drop-shadow-2xl">
            <defs>
              <linearGradient id="cauaHair" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
            </defs>

            {/* Corpo / Casaco Verde */}
            <path d="M60 190 Q120 175 180 190 L195 280 L45 280 Z" fill="#059669" stroke="#0f172a" strokeWidth="3.5" />
            <line x1="120" y1="185" x2="120" y2="280" stroke="#022c22" strokeWidth="3" />
            <line x1="108" y1="190" x2="108" y2="240" stroke="#a7f3d0" strokeWidth="2" strokeLinecap="round" />
            <line x1="132" y1="190" x2="132" y2="240" stroke="#a7f3d0" strokeWidth="2" strokeLinecap="round" />

            {/* Rosto */}
            <ellipse cx="120" cy="120" rx="54" ry="58" fill="#f0b68e" stroke="#0f172a" strokeWidth="3.5" />
            {/* Orelhas */}
            <circle cx="65" cy="125" r="8" fill="#e2a77f" stroke="#0f172a" strokeWidth="2.5" />
            <circle cx="175" cy="125" r="8" fill="#e2a77f" stroke="#0f172a" strokeWidth="2.5" />

            {/* Cabelo fade moderno */}
            <path d="M66 105 C66 45 174 45 174 105 C155 70 85 70 66 105 Z" fill="url(#cauaHair)" stroke="#0f172a" strokeWidth="3" />

            {/* Óculos de armação geométrica azul */}
            <rect x="85" y="112" width="28" height="22" rx="4" fill="#38bdf8" fillOpacity="0.2" stroke="#0f172a" strokeWidth="3" />
            <rect x="127" y="112" width="28" height="22" rx="4" fill="#38bdf8" fillOpacity="0.2" stroke="#0f172a" strokeWidth="3" />
            <line x1="113" y1="122" x2="127" y2="122" stroke="#0f172a" strokeWidth="3" />

            {/* Olhos atrás das lentes */}
            <circle cx="99" cy="123" r="4.5" fill="#0f172a" />
            <circle cx="141" cy="123" r="4.5" fill="#0f172a" />

            {emotion === 'investigating' && (
              <>
                <line x1="86" y1="104" x2="112" y2="108" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
                <line x1="128" y1="108" x2="154" y2="104" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
                <line x1="112" y1="152" x2="128" y2="152" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" />
                {/* Mini smartphone */}
                <rect x="165" y="210" width="30" height="50" rx="5" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
                <rect x="168" y="216" width="24" height="34" rx="2" fill="#0284c7" />
              </>
            )}

            {(emotion === 'calm' || emotion === 'confident') && (
              <>
                <path d="M88 104 Q100 100 112 104" stroke="#0f172a" strokeWidth="2.5" fill="none" />
                <path d="M128 104 Q140 100 152 104" stroke="#0f172a" strokeWidth="2.5" fill="none" />
                <path d="M110 150 Q120 160 130 150" stroke="#0f172a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              </>
            )}
          </svg>
        );

      // ==========================================
      // LÉO: Colega esportivo, faixa vermelha
      // ==========================================
      case 'leo':
        return (
          <svg viewBox="0 0 240 280" className="w-full h-full drop-shadow-2xl">
            <path d="M60 190 Q120 175 180 190 L195 280 L45 280 Z" fill="#ef4444" stroke="#0f172a" strokeWidth="3.5" />
            <polygon points="100,185 120,210 140,185" fill="#ffffff" />

            <ellipse cx="120" cy="120" rx="54" ry="58" fill="#fed7aa" stroke="#0f172a" strokeWidth="3.5" />
            <circle cx="65" cy="125" r="8" fill="#fed7aa" stroke="#0f172a" strokeWidth="2.5" />
            <circle cx="175" cy="125" r="8" fill="#fed7aa" stroke="#0f172a" strokeWidth="2.5" />

            {/* Faixa esportiva branca na testa */}
            <rect x="66" y="90" width="108" height="15" rx="3" fill="#ffffff" stroke="#0f172a" strokeWidth="2.5" />
            <rect x="110" y="92" width="20" height="11" fill="#ef4444" />

            {/* Cabelo castanho espetado */}
            <polygon points="68,90 85,55 100,90 120,50 140,90 155,55 172,90" fill="#78350f" stroke="#0f172a" strokeWidth="2.5" />

            {emotion === 'furious' && (
              <>
                <line x1="88" y1="108" x2="110" y2="118" stroke="#0f172a" strokeWidth="3.5" strokeLinecap="round" />
                <line x1="152" y1="108" x2="130" y2="118" stroke="#0f172a" strokeWidth="3.5" strokeLinecap="round" />
                <circle cx="98" cy="122" r="5" fill="#0f172a" />
                <circle cx="142" cy="122" r="5" fill="#0f172a" />
                <ellipse cx="120" cy="154" rx="12" ry="10" fill="#7f1d1d" stroke="#0f172a" strokeWidth="2" />
                <rect x="114" y="146" width="12" height="5" rx="1" fill="#ffffff" />
              </>
            )}

            {emotion === 'ashamed' && (
              <>
                <path d="M90 122 Q100 128 110 122" stroke="#0f172a" strokeWidth="3" fill="none" />
                <path d="M130 122 Q140 128 150 122" stroke="#0f172a" strokeWidth="3" fill="none" />
                <ellipse cx="88" cy="135" rx="9" ry="5" fill="#ef4444" opacity="0.6" />
                <ellipse cx="152" cy="135" rx="9" ry="5" fill="#ef4444" opacity="0.6" />
                <path d="M112 154 Q120 148 128 154" stroke="#0f172a" strokeWidth="2.5" fill="none" />
              </>
            )}

            {emotion === 'doubtful' && (
              <>
                <line x1="90" y1="112" x2="110" y2="112" stroke="#0f172a" strokeWidth="2.5" />
                <line x1="130" y1="116" x2="150" y2="110" stroke="#0f172a" strokeWidth="2.5" />
                <circle cx="98" cy="122" r="4.5" fill="#0f172a" />
                <circle cx="142" cy="122" r="4.5" fill="#0f172a" />
                <path d="M112 152 Q120 146 128 152" stroke="#0f172a" strokeWidth="2" fill="none" />
              </>
            )}
          </svg>
        );

      // ==========================================
      // IGOR: Zagueiro do 8º B, camisa laranja
      // ==========================================
      case 'igor':
        return (
          <svg viewBox="0 0 240 280" className="w-full h-full drop-shadow-2xl">
            <path d="M60 190 Q120 175 180 190 L195 280 L45 280 Z" fill="#ea580c" stroke="#0f172a" strokeWidth="3.5" />
            <rect x="55" y="235" width="130" height="18" fill="#1e293b" />
            <text x="120" y="248" textAnchor="middle" fill="#ea580c" fontSize="11" fontWeight="bold">8º B</text>

            <ellipse cx="120" cy="120" rx="54" ry="58" fill="#fed7aa" stroke="#0f172a" strokeWidth="3.5" />
            <circle cx="65" cy="125" r="8" fill="#fed7aa" stroke="#0f172a" strokeWidth="2.5" />
            <circle cx="175" cy="125" r="8" fill="#fed7aa" stroke="#0f172a" strokeWidth="2.5" />

            {/* Cabelo loiro undercut estilizado */}
            <path d="M66 100 C66 45 174 45 174 100 C155 65 115 65 66 100 Z" fill="#facc15" stroke="#0f172a" strokeWidth="3" />

            {emotion === 'smug' && (
              <>
                <path d="M88 108 L110 114" stroke="#0f172a" strokeWidth="3" />
                <path d="M130 112 L152 106" stroke="#0f172a" strokeWidth="3" />
                <circle cx="98" cy="122" r="4" fill="#0f172a" />
                <circle cx="142" cy="122" r="4" fill="#0f172a" />
                <path d="M114 150 Q128 144 136 150" stroke="#0f172a" strokeWidth="3" fill="none" strokeLinecap="round" />
              </>
            )}

            {emotion === 'crying_caught' && (
              <>
                <path d="M90 122 Q100 114 110 122" stroke="#0f172a" strokeWidth="3" fill="none" />
                <path d="M130 122 Q140 114 150 122" stroke="#0f172a" strokeWidth="3" fill="none" />
                <path d="M94 128 C92 145 98 160 96 168" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />
                <path d="M146 128 C144 145 150 160 148 168" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />
                <ellipse cx="120" cy="154" rx="9" ry="8" fill="#7f1d1d" stroke="#0f172a" strokeWidth="2" />
              </>
            )}
          </svg>
        );

      // ==========================================
      // DONA SOCORRO: Merendeira carinhosa
      // ==========================================
      case 'socorro':
        return (
          <svg viewBox="0 0 240 280" className="w-full h-full drop-shadow-2xl">
            <path d="M55 185 Q120 170 185 185 L200 280 L40 280 Z" fill="#ec4899" stroke="#0f172a" strokeWidth="3.5" />
            <path d="M80 190 L95 280 L145 280 L160 190 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2.5" />

            <ellipse cx="120" cy="120" rx="54" ry="58" fill="#fed7aa" stroke="#0f172a" strokeWidth="3.5" />
            {/* Touca de cozinha branca */}
            <ellipse cx="120" cy="85" rx="60" ry="32" fill="#ffffff" stroke="#cbd5e1" strokeWidth="3" />
            <circle cx="160" cy="100" r="7" fill="#f43f5e" />

            {/* Óculos redondos simpáticos */}
            <circle cx="98" cy="122" r="12" fill="#ffffff" fillOpacity="0.3" stroke="#0f172a" strokeWidth="2.5" />
            <circle cx="142" cy="122" r="12" fill="#ffffff" fillOpacity="0.3" stroke="#0f172a" strokeWidth="2.5" />
            <line x1="110" y1="122" x2="130" y2="122" stroke="#0f172a" strokeWidth="2.5" />
            <circle cx="98" cy="122" r="3.5" fill="#0f172a" />
            <circle cx="142" cy="122" r="3.5" fill="#0f172a" />

            <path d="M110 152 Q120 162 130 152" stroke="#9d174d" strokeWidth="3" fill="none" strokeLinecap="round" />
            <ellipse cx="86" cy="138" rx="8" ry="5" fill="#f43f5e" opacity="0.4" />
            <ellipse cx="154" cy="138" rx="8" ry="5" fill="#f43f5e" opacity="0.4" />
          </svg>
        );

      // ==========================================
      // SEU RAIMUNDO: Inspetor com apito
      // ==========================================
      case 'raimundo':
        return (
          <svg viewBox="0 0 240 280" className="w-full h-full drop-shadow-2xl">
            <path d="M60 190 Q120 175 180 190 L195 280 L45 280 Z" fill="#84cc16" stroke="#0f172a" strokeWidth="3.5" />
            <line x1="120" y1="185" x2="120" y2="230" stroke="#475569" strokeWidth="2.5" />
            <circle cx="120" cy="235" r="6" fill="#94a3b8" stroke="#0f172a" strokeWidth="2" />

            <ellipse cx="120" cy="120" rx="54" ry="58" fill="#d4a373" stroke="#0f172a" strokeWidth="3.5" />
            {/* Boné de inspetor */}
            <path d="M68 95 C68 45 172 45 172 95 Z" fill="#64748b" stroke="#0f172a" strokeWidth="2.5" />
            <path d="M60 95 L180 95 L170 85 L70 85 Z" fill="#334155" stroke="#0f172a" strokeWidth="2.5" />

            <circle cx="98" cy="120" r="4" fill="#0f172a" />
            <circle cx="142" cy="120" r="4" fill="#0f172a" />
            {/* Bigode respeitável */}
            <path d="M102 142 Q120 132 138 142 Q120 156 102 142 Z" fill="#475569" stroke="#0f172a" strokeWidth="2" />
          </svg>
        );

      // ==========================================
      // DIRETOR: Blazer, gravata, postura firme
      // ==========================================
      case 'diretor':
        return (
          <svg viewBox="0 0 240 280" className="w-full h-full drop-shadow-2xl">
            <path d="M55 185 Q120 170 185 185 L200 280 L40 280 Z" fill="#1e1b4b" stroke="#0f172a" strokeWidth="3.5" />
            <polygon points="100,185 120,215 140,185" fill="#ffffff" />
            <polygon points="117,198 123,198 125,250 120,258 115,250" fill="#991b1b" stroke="#0f172a" strokeWidth="1.5" />

            <ellipse cx="120" cy="120" rx="54" ry="58" fill="#fed7aa" stroke="#0f172a" strokeWidth="3.5" />
            <path d="M68 95 C68 50 172 50 172 95 C155 70 85 70 68 95 Z" fill="#334155" stroke="#0f172a" strokeWidth="2.5" />

            {/* Óculos quadrados formais */}
            <rect x="86" y="112" width="26" height="18" rx="3" fill="#ffffff" fillOpacity="0.2" stroke="#0f172a" strokeWidth="3" />
            <rect x="128" y="112" width="26" height="18" rx="3" fill="#ffffff" fillOpacity="0.2" stroke="#0f172a" strokeWidth="3" />
            <line x1="112" y1="121" x2="128" y2="121" stroke="#0f172a" strokeWidth="3" />
            <circle cx="99" cy="121" r="3" fill="#0f172a" />
            <circle cx="141" cy="121" r="3" fill="#0f172a" />

            <line x1="108" y1="152" x2="132" y2="152" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`relative select-none pointer-events-none ${speaking ? 'scale-100 transition-transform duration-300' : 'opacity-95'}`}>
      {/* Ilustração Cartoon Vetorial */}
      <div className="w-52 sm:w-60 md:w-68 max-h-[290px] aspect-[4/5] flex items-end justify-center filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]">
        {renderCharacterSvg()}
      </div>
    </div>
  );
};

