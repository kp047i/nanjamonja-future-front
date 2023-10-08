// import { useGame } from "../../features/Game/hooks/useGame";

import styled from "styled-components";
import { CARD_WIDTH, CARD_HEIGHT } from "../../../features/Card/const";
import { PlayerScore } from "../../../features/Player/components/PlayerScore";
import { Player } from "../../../features/Player/type";
import { Card } from "../../../features/Card/type";
import { useGame } from "../../../features/Game/hooks/useGame";

const dummyPlayers: Player[] = [
  {
    name: "Taro Yamada",
    score: 150,
  },
  {
    name: "Hanako Tanaka",
    score: 120,
  },
  {
    name: "Kenji Suzuki",
    score: 180,
  },
  {
    name: "Yuki Sato",
    score: 170,
  },
  {
    name: "Rina Takahashi",
    score: 200,
  },
  {
    name: "Yusuke Watanabe",
    score: 110,
  },
];

const dummyCard = {
  imgPath:
    "https://res.cloudinary.com/techfeed/image/upload/w_96,h_96,c_fill/v1585110459/users/wqrb2bwadnhi0df00qmm.png",
  userName: "kappy",
};

const dummyDeck: Card[] = [...Array(24)].map(() => dummyCard);

export const Play = () => {
  const { deck } = useGame();
  const handleDeckClick = () => {
    console.log("deck clicked");
  };

  return (
    <StyledPlayLayout>
      <DeckArea>
        <button onClick={handleDeckClick}>
          <img src="/images/deck.png" width={CARD_WIDTH} height={CARD_HEIGHT} />
        </button>
        残りの枚数: {dummyDeck.length}枚
      </DeckArea>
      <DisplayCardArea>カードのすて札エリア</DisplayCardArea>
      <PlayersArea>
        {dummyPlayers.map((player) => (
          <PlayerScore player={player} />
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
`;

const PlayersArea = styled.div`
  grid-area: 1 / 3 / 2 / 4;
`;

const OperationArea = styled.div`
  grid-area: 2 / 1 / 3 / 4;
  display: grid;
  place-content: center;
  gap: 16px;
`;
