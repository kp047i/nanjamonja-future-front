import styled from "styled-components";
import { CardCheckBox } from "../../features/Card/components/CardCheckBox";

import { useCards } from "../../features/Card/hooks/useCards";
import { Card } from "../../features/Card/type";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useGame } from "../../features/Game/hooks/useGame";

// 選択できるカードの最大の数
const MAX_SELECTABLE_CARD_COUNT = 4;
// 選択するカードの最小の数
const MIN_SELECTABLE_CARD_COUNT = 2;

export const Lobby = () => {
  const { cards, selectedCards, appendSelectedCards, removeSelectedCards } =
    useCards();

  const { startGame } = useGame();

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
    startGame(selectedCards);
    navigate("/game/play");
  };

  if (!cards) {
    return <div>loading...</div>;
  }

  return (
    <GameLayout>
      <CardList>
        {cards.map((card) => (
          <CardWrapper>
            <CardCheckBox
              key={card.user_name}
              card={card}
              checked={selectedCards.includes(card)}
              handleChange={() => handleChange(card)}
            />
          </CardWrapper>
        ))}
      </CardList>

      <ParticipateHumans>
        {[...new Array(selectedCards.length)].map((_, index) => (
          <HumanImg key={index} src="/images/participate.png" alt="" />
        ))}
        {[...new Array(MAX_SELECTABLE_CARD_COUNT - selectedCards.length)].map(
          (_, index) => (
            <HumanImg key={index} src="/images/stand.png" alt="" />
          )
        )}
      </ParticipateHumans>

      <Button
        onClick={handleStartButtonClick}
        style={{ fontSize: "24px", fontWeight: 800, color: "#fff" }}
      >
        <GameStart
          data-submittable={selectedCards.length > MIN_SELECTABLE_CARD_COUNT}
        >
          Start!
        </GameStart>
      </Button>
    </GameLayout>
  );
};

const GameLayout = styled.div`
  padding: 80px 200px 80px 100px;
`;

const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GameStart = styled.div`
  box-sizing: border-box;
  position: fixed;
  right: -30px;
  bottom: -30px;
  background-color: #ec5f43;
  color: #fff;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.5));
  transition: transform 0.2s ease-out;
  padding: 0 10px 10px 0;
  &:hover {
    transform: scale(1.1);
  }
  &[data-submittable="false"] {
    background-color: #aaa;
    pointer-events: none;
  }
`;

const ParticipateHumans = styled.div`
  position: fixed;
  right: 10px;
  top: 40px;
  display: flex;
  align-items: flex-end;
  height: 85px;
`;

const HumanImg = styled.img`
  width: 40px;
`;
