import { useEffect, useState } from "react";
import { Card } from "../type";

export type UseCards = {
  cards: Card[] | undefined;
};

const GET_CARDS_URL = "https://h3nckvn8-8000.asse.devtunnels.ms/api/user/get/";

export const useCards = () => {
  const [cards, setCards] = useState<Card[] | null>([]);
  const [selectedCards, setSelectedCards] = useState<Card[]>([]);

  const appendSelectedCards = (card: Card) => {
    setSelectedCards([...selectedCards, card]);
  };

  const removeSelectedCards = (card: Card) => {
    const newSelectedCards = selectedCards.filter(
      (selectedCard) => selectedCard.id !== card.id
    );
    setSelectedCards(newSelectedCards);
  };

  useEffect(() => {
    (async () => {
      const res = await fetch(GET_CARDS_URL).then((res) => res.json());
      setCards(res);
    })();
  }, []);

  return {
    cards,
    selectedCards,
    appendSelectedCards,
    removeSelectedCards,
  };
};
