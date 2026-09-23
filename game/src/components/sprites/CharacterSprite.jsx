import React from 'react';

// Importando os novos assets de personagens
import bia_calm from '../../assets/characters/bia_calm.png';
import bia_champion from '../../assets/characters/bia_champion.png';
import bia_crying from '../../assets/characters/bia_crying.png';
import bia_hopeful from '../../assets/characters/bia_hopeful.png';
import bia_panicked from '../../assets/characters/bia_panicked.png';
import bia_relieved from '../../assets/characters/bia_relieved.png';
import caua_calm from '../../assets/characters/caua_calm.png';
import caua_confident from '../../assets/characters/caua_confident.png';
import caua_investigating from '../../assets/characters/caua_investigating.png';
import diretor_serious from '../../assets/characters/diretor_serious.png';
import igor_calm from '../../assets/characters/igor_calm.png';
import igor_crying_caught from '../../assets/characters/igor_crying_caught.png';
import igor_smug from '../../assets/characters/igor_smug.png';
import leo_ashamed from '../../assets/characters/leo_ashamed.png';
import leo_calm from '../../assets/characters/leo_calm.png';
import leo_doubtful from '../../assets/characters/leo_doubtful.png';
import leo_furious from '../../assets/characters/leo_furious.png';
import raimundo_observant from '../../assets/characters/raimundo_observant.png';
import socorro_firm_witness from '../../assets/characters/socorro_firm_witness.png';

const ASSET_MAP = {
  bia_calm,
  bia_champion,
  bia_crying,
  bia_hopeful,
  bia_panicked,
  bia_relieved,
  caua_calm,
  caua_confident,
  caua_investigating,
  diretor_serious,
  igor_calm,
  igor_crying_caught,
  igor_smug,
  leo_ashamed,
  leo_calm,
  leo_doubtful,
  leo_furious,
  raimundo_observant,
  socorro_firm_witness
};

// Aliases secundários presentes no roteiro mapeados para imagens existentes
const ALIASES = {
  bia_serious: 'bia_calm',
  bia_firm_witness: 'bia_calm',
  bia_observant: 'bia_calm',
};

/**
 * CharacterSprite: Sprites cartoon modernos, elegantes e expressivos.
 * Atualizado para utilizar os novos assets em formato .png em vez dos SVGs procedurais.
 */
export const CharacterSprite = ({ character = 'bia', emotion = 'calm', speaking = false }) => {
  const assetKey = `${character}_${emotion}`;
  const resolvedKey = ALIASES[assetKey] || assetKey;

  // Fallback para a emoção 'calm' (ou similar) se a emoção específica não for encontrada
  const imageSrc = ASSET_MAP[resolvedKey] 
    || ASSET_MAP[`${character}_calm`] 
    || ASSET_MAP[`${character}_serious`] 
    || ASSET_MAP[`${character}_observant`] 
    || ASSET_MAP[`${character}_firm_witness`];

  return (
    <div className={`relative select-none pointer-events-none ${speaking ? 'scale-100 transition-transform duration-300' : 'opacity-95'}`}>
      <div className="w-52 sm:w-60 md:w-68 max-h-[290px] aspect-[4/5] flex items-end justify-center filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]">
        {imageSrc ? (
          <img 
            src={imageSrc} 
            alt={`${character} - ${emotion}`} 
            className="w-full h-full object-contain object-bottom"
          />
        ) : null}
      </div>
    </div>
  );
};

