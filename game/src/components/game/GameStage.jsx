import React, { useState } from 'react';
import { SceneryBackground } from '../sprites/SceneryBackground';
import { CharacterSprite } from '../sprites/CharacterSprite';
import { EvidenceOverlay } from '../sprites/EvidenceOverlay';
import { DialogueBox } from './DialogueBox';
import { MediatorModal } from './MediatorModal';

/**
 * GameStage: O palco principal do jogo (Vertical Slice).
 * Integra o cenário vetorial cartoon, os sprites dos personagens,
 * sobreposições forenses e a caixa de diálogo e escolhas.
 */
export const GameStage = ({
  decision,
  onSelectOption,
  isMediatorOpen,
  onOpenMediator,
  onCloseMediator
}) => {
  const [isEvidenceOpen, setIsEvidenceOpen] = useState(false);

  if (!decision) return null;

  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden">
      
      {/* 1. Cenário de Fundo Cartoon */}
      <SceneryBackground scenery={decision.scenery}>
        
        {/* 2. Personagem em Destaque na Cena */}
        <div className="absolute bottom-[180px] md:bottom-[195px] left-6 md:left-20 z-10 animate-pop">
          <CharacterSprite
            character={decision.character}
            emotion={decision.emotion}
            speaking={true}
          />
        </div>

      </SceneryBackground>

      {/* 3. Pop-up de Evidência Digital Forense (se ativado) */}
      {isEvidenceOpen && decision.evidence && (
        <EvidenceOverlay
          evidenceType={decision.evidence}
          onClose={() => setIsEvidenceOpen(false)}
        />
      )}

      {/* 4. Modal do Mediador de ADS */}
      <MediatorModal
        isOpen={isMediatorOpen}
        onClose={onCloseMediator}
        tip={decision.tip}
        currentStepTitle={decision.title}
      />

      {/* 5. Espaço Superior (HUD fica no topo fora do stage) */}
      <div className="w-full flex-1 pointer-events-none" />

      {/* 6. Caixa de Diálogo e Escolhas no Rodapé */}
      <div className="w-full">
        <DialogueBox
          decision={decision}
          onSelectOption={onSelectOption}
          onOpenEvidence={() => setIsEvidenceOpen(true)}
          onOpenMediator={onOpenMediator}
        />
      </div>

    </div>
  );
};
