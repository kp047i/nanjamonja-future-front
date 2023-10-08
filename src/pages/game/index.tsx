import styled from "styled-components";
// import { CardCheckBox } from "../../features/Card/components/CardCheckBox";
// import { useState } from "react";
// import { Card } from "../../features/Card/type";

// const cards: Card[] = [
//   {
//     userName: "user1",
//     imgPath:
//       "https://res.cloudinary.com/techfeed/image/upload/w_96,h_96,c_fill/v1585110459/users/wqrb2bwadnhi0df00qmm.png",
//   },
// ];

export const Game = () => {
  // const [selectedCards, setSelectedCards] = useState<Card[]>([]);

  return (
    <GameLayout>
      <CardList></CardList>
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
