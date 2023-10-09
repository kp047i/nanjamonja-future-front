import styled from "styled-components";
import { CARD_WIDTH, CARD_HEIGHT } from "../../../features/Card/const";
import { PlayerScore } from "../../../features/Player/components/PlayerScore";

import { useGame } from "../../../features/Game/hooks/useGame";
import { useState } from "react";

export const Play = () => {
  const { deck, playCard, playedCards, players, addPoints, nameCard } =
    useGame();
  const [characterName, setCharacterName] = useState<string>("");
  const [displayingName, setDisplayingName] = useState("");
  const [isNameDisplayed, setIsNameDisplayed] = useState(false);
  const lastPlayedCard = playedCards.at(-1);

  const handleDeckClick = () => {
    setIsNameDisplayed(false);
    playCard();
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCharacterName(e.target.value);
  };

  const handleNameButtonClick = () => {
    nameCard(characterName);
    setCharacterName("");
  };

  const handleDisplayNameButtonClick = () => {
    setDisplayingName(lastPlayedCard?.character_name ?? "");
    setIsNameDisplayed(true);
  };

  console.log(deck);

  return (
    <StyledPlayLayout>
      <DeckArea>
        <DeckWrapper>
        <button onClick={handleDeckClick}>
          <img src="/images/deck.png" width={CARD_WIDTH} height={CARD_HEIGHT} />
        </button>
        <PointBudge data-type="rest">{deck.length}</PointBudge>
        </DeckWrapper>
      </DeckArea>
      <DisplayCardArea>
        <CardWrapper>
          {playedCards.length > 0 ? (
            <>
              <Card
                src={lastPlayedCard?.content}
                />
              {/* {lastPlayedCard?.character_name ?? "カードの名前がありません"} */}
            </>
          ) : (
            <div
            style={{
              width: CARD_WIDTH,
              height: CARD_HEIGHT,
            }}
            ></div>
            )}
          <PointBudge data-type="point">{playedCards.length}</PointBudge>
        </CardWrapper>
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
          <input value={characterName} onChange={handleNameChange} />
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
  position: relative;
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

const CardWrapper = styled.div`
  position: relative;
`

const Card = styled.img`
  width: 240px;
  border-radius: 20px;
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));
`;

const PointBudge = styled.div`
  width: 50px;
  height: 50px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 24px;
  font-weight: 800;
  position: absolute;
  top: -20px;
  right: -20px;
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));
  &[data-type="point"] {
    background-color: #1ba951;
  }
  &[data-type="rest"] {
    background-color: #f3330d;
  }
`

const DeckWrapper = styled.div`
  position: relative;
`;
