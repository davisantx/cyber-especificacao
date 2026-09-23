import React from 'react';
import salaDeAula from '../../assets/sceneries/sala_de_aula.jpg';
import corredor from '../../assets/sceneries/corredor.jpg';
import cantina from '../../assets/sceneries/cantina.jpg';
import vestiario from '../../assets/sceneries/vestiario.jpg';
import diretoria from '../../assets/sceneries/diretoria.jpg';
import quadra from '../../assets/sceneries/quadra.jpg';

const SCENERIES = {
  sala_de_aula: { src: salaDeAula, alt: 'Sala de Aula - 7º Ano A' },
  corredor: { src: corredor, alt: 'Corredor da Escola' },
  cantina: { src: cantina, alt: 'Cantina Escolar' },
  vestiario: { src: vestiario, alt: 'Vestiário de Futsal' },
  diretoria: { src: diretoria, alt: 'Diretoria da Escola' },
  quadra: { src: quadra, alt: 'Quadra Poliesportiva do Interclasses' }
};

/**
 * SceneryBackground: Cenários de fundo em Pixel Art 16-bit de alta definição.
 * 100% offline, empacotado no build do Vite para rodar direto de pen drive.
 */
export const SceneryBackground = ({ scenery = 'sala_de_aula', children }) => {
  const current = SCENERIES[scenery] || SCENERIES.sala_de_aula;

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden select-none bg-slate-950">
      {/* Imagem do Cenário Pixel Art 16-bit */}
      <img
        src={current.src}
        alt={current.alt}
        className="absolute inset-0 w-full h-full object-cover object-center scale-[1.01]"
        style={{ imageRendering: 'pixelated' }}
      />

      {/* Camada sutil de vinheta retrô para contraste com o palco e diálogo */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30 pointer-events-none" />

      {/* Conteúdo sobre o cenário (personagens, diálogos, HUD) */}
      {children}
    </div>
  );
};
