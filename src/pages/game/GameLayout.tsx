import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Card } from "../../features/Card/type";

export type GameContext = {
  deck: Card[];
  createDeck: (selectedCard: Card[]) => void;
};

export const GameLayout = () => {
  const [deck, setDeck] = useState<Card[]>([]);

  const createDeck = (selectedCard: Card[]) => {
    setDeck(
      [...selectedCard, ...selectedCard, ...selectedCard].sort(
        () => Math.random() - 0.5
      )
    );
  };

  return <Outlet context={{ deck, createDeck } satisfies GameContext} />;
};
