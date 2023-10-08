// import { useGame } from "../../features/Game/hooks/useGame";

import styled from "styled-components";
import { CARD_WIDTH, CARD_HEIGHT } from "../../../features/Card/const";
import { PlayerScore } from "../../../features/Player/components/PlayerScore";

import { useGame } from "../../../features/Game/hooks/useGame";

export const Play = () => {
  const { deck, playCard, playedCards, players, addPoints } = useGame();

  const handleDeckClick = () => {
    playCard();
  };

  return (
    <StyledPlayLayout>
      <DeckArea>
        <button onClick={handleDeckClick}>
          <img src="/images/deck.png" width={CARD_WIDTH} height={CARD_HEIGHT} />
        </button>
        残りの枚数: {deck.length}枚
      </DeckArea>
      <DisplayCardArea>
        {playedCards.length > 0 ? (
          <img
            src={playedCards[playedCards.length - 1]?.imgPath}
            width={CARD_WIDTH}
            height={CARD_HEIGHT}
          />
        ) : (
          <div
            style={{
              width: CARD_WIDTH,
              height: CARD_HEIGHT,
            }}
          ></div>
        )}
        捨てられたカードの枚数: {playedCards.length}枚
      </DisplayCardArea>
      <PlayersArea>
        {players.map((player) => (
          <PlayerScore player={player} handleAddScoreButton={addPoints} />
        ))}
      </PlayersArea>
      <OperationArea>
        <div>
          <input />
          <button>カードに名前をつける</button>
        </div>
        <div>
          <button>カードに名前を確認する</button>
        </div>
      </OperationArea>
    </StyledPlayLayout>
  );
};

const StyledPlayLayout = styled.div`
  display: grid;
  grid-template-columns: 25% 50% 25%;
  grid-template-rows: 80% 20%;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 1200px;
  height: 100vh;
`;

const DeckArea = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: grid;
  place-content: center;
  gap: 16px;
`;

const DisplayCardArea = styled.div`
  padding: 16px;
  grid-area: 1 / 2 / 2 / 3;
  display: grid;
  place-content: center;
`;

const PlayersArea = styled.div`
  grid-area: 1 / 3 / 2 / 4;
  display: grid;
  gap: 32px;
`;

const OperationArea = styled.div`
  grid-area: 2 / 1 / 3 / 4;
  display: grid;
  place-content: center;
  gap: 16px;
`;
