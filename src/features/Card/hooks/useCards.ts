import { useEffect, useState } from "react";
import { Card } from "../type";

export type UseCards = {
  cards: Card[] | undefined;
};

export const useCards = () => {
  const [cards, setCards] = useState<Card[] | null>(null);
  const [selectedCards, setSelectedCards] = useState<Card[]>([]);

  const appendSelectedCards = (card: Card) => {
    setSelectedCards([...selectedCards, card]);
  };

  const removeSelectedCards = (card: Card) => {
    const newSelectedCards = selectedCards.filter(
      (selectedCard) => selectedCard.user_name !== card.user_name
    );
    setSelectedCards(newSelectedCards);
  };

  useEffect(() => {
    (async () => {
      const res = await fetch("https://h3nckvn8-8000.asse.devtunnels.ms/api/user/get/").then((res) => res.json());
      setCards(res);
    })()
  }, [])

  return {
    cards,
    selectedCards,
    appendSelectedCards,
    removeSelectedCards,
  };
};
