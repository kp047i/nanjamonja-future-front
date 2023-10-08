// import { useGame } from "../../features/Game/hooks/useGame";

import styled from "styled-components";
import { CARD_WIDTH, CARD_HEIGHT } from "../../../features/Card/const";
import { PlayerScore } from "../../../features/Player/components/PlayerScore";

import { useGame } from "../../../features/Game/hooks/useGame";
import { useState } from "react";

export const Play = () => {
  const { deck, playCard, playedCards, players, addPoints, nameCard } =
    useGame();
  const [name, setName] = useState<string>("");
  const [displayingName, setDisplayingName] = useState("");
  const [isNameDisplayed, setIsNameDisplayed] = useState(false);
  const lastPlayedCard = playedCards.at(-1);

  const handleDeckClick = () => {
    setIsNameDisplayed(false);
    playCard();
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleNameButtonClick = () => {
    nameCard(name);
    setName("");
  };

  const handleDisplayNameButtonClick = () => {
    setDisplayingName(lastPlayedCard?.name ?? "");
    setIsNameDisplayed(true);
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
          <>
            <img
              src={lastPlayedCard?.content}
              width={CARD_WIDTH}
              height={CARD_HEIGHT}
            />
            {lastPlayedCard?.name ?? "カードの名前がありません"}
          </>
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
          <PlayerScore
            key={player.id}
            player={player}
            handleAddScoreButton={addPoints}
          />
        ))}
      </PlayersArea>
      <OperationArea>
        <div>
          <input value={name} onChange={handleNameChange} />
          <button onClick={handleNameButtonClick}>カードに名前をつける</button>
        </div>
        <div>
          {isNameDisplayed && <span>{displayingName}</span>}
          <button onClick={handleDisplayNameButtonClick}>
            カードの名前を確認する
          </button>
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
