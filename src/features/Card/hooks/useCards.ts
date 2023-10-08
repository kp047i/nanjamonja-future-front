import { useState } from "react";
import { Card } from "../type";

const dummyCards: Card[] = [
  {
    userName: "user1",
    imgPath:
      "https://res.cloudinary.com/techfeed/image/upload/w_96,h_96,c_fill/v1585110459/users/wqrb2bwadnhi0df00qmm.png",
  },
  {
    userName: "user2",
    imgPath:
      "https://res.cloudinary.com/techfeed/image/upload/w_96,h_96,c_fill/v1585110459/users/wqrb2bwadnhi0df00qmm.png",
  },
  {
    userName: "user3",
    imgPath:
      "https://res.cloudinary.com/techfeed/image/upload/w_96,h_96,c_fill/v1585110459/users/wqrb2bwadnhi0df00qmm.png",
  },
  {
    userName: "user4",
    imgPath:
      "https://res.cloudinary.com/techfeed/image/upload/w_96,h_96,c_fill/v1585110459/users/wqrb2bwadnhi0df00qmm.png",
  },
  {
    userName: "user5",
    imgPath:
      "https://res.cloudinary.com/techfeed/image/upload/w_96,h_96,c_fill/v1585110459/users/wqrb2bwadnhi0df00qmm.png",
  },
  {
    userName: "user6",
    imgPath:
      "https://res.cloudinary.com/techfeed/image/upload/w_96,h_96,c_fill/v1585110459/users/wqrb2bwadnhi0df00qmm.png",
  },
];

export type UseCards = {
  cards: Card[] | undefined;
};

export const useCards = () => {
  const [cards] = useState<Card[] | undefined>(dummyCards);
  const [selectedCards, setSelectedCards] = useState<Card[]>([]);

  const appendSelectedCards = (card: Card) => {
    setSelectedCards([...selectedCards, card]);
  };
  const removeSelectedCards = (card: Card) => {
    const newSelectedCards = selectedCards.filter(
      (selectedCard) => selectedCard.userName !== card.userName
    );
    setSelectedCards(newSelectedCards);
  };

  return {
    cards,
    selectedCards,
    appendSelectedCards,
    removeSelectedCards,
  };
};
