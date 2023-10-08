import styled from "styled-components";
import { CardCheckBox } from "../../features/Card/components/CardCheckBox";

import { useCards } from "../../features/Card/hooks/useCards";
import { Card } from "../../features/Card/type";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";

// 選択できるカードの最大の数
const MAX_SELECTABLE_CARD_COUNT = 4;
// 選択するカードの最小の数
const MIN_SELECTABLE_CARD_COUNT = 2;

export const Robby = () => {
  const { cards, selectedCards, appendSelectedCards, removeSelectedCards } =
    useCards();

  const navigate = useNavigate();

  const handleChange = (card: Card) => {
    if (
      selectedCards.length === MAX_SELECTABLE_CARD_COUNT &&
      !selectedCards.includes(card)
    ) {
      return;
    }
    if (selectedCards.includes(card)) {
      removeSelectedCards(card);
    } else {
      appendSelectedCards(card);
    }
  };

  const handleStartButtonClick = () => {
    if (selectedCards.length < MIN_SELECTABLE_CARD_COUNT) {
      return;
    }
    navigate("/game");
  };

  if (!cards) {
    return <div>loading...</div>;
  }

  return (
    <GameLayout>
      <CardList>
        {cards.map((card) => (
          <CardCheckBox
            key={card.userName}
            card={card}
            checked={selectedCards.includes(card)}
            handleChange={() => handleChange(card)}
          />
        ))}
      </CardList>
      <p>ゲームの最小人数: {MIN_SELECTABLE_CARD_COUNT}人</p>
      <p>ゲームの最大人数: {MAX_SELECTABLE_CARD_COUNT}人</p>
      <p>選択されている人数: {selectedCards.length}人</p>
      <Button onClick={handleStartButtonClick}>ゲームを開始する</Button>
    </GameLayout>
  );
};

const GameLayout = styled.div`
  width: 100vh;
  height: 100vh;
`;

const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 160px);
  gap: 64px;
  place-content: center;
`;
