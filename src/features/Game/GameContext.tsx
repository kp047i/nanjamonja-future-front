import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Card } from "../../features/Card/type";
import { Player } from "../Player/type";

const dummyCard = (index: number) => {
  return {
    id: String(index),
    imgPath:
      "https://res.cloudinary.com/techfeed/image/upload/w_96,h_96,c_fill/v1585110459/users/wqrb2bwadnhi0df00qmm.png",
    userName: "kappy",
    name: "",
  };
};

const dummyDeck: Card[] = [...Array(24)].map((_, index) =>
  dummyCard(index % 2)
);

const dummyPlayers: Player[] = [
  {
    id: "1",
    name: "Taro Yamada",
    score: 0,
  },
  {
    id: "2",
    name: "Hanako Tanaka",
    score: 0,
  },
  {
    id: "3",
    name: "Kenji Suzuki",
    score: 0,
  },
  {
    id: "4",
    name: "Yuki Sato",
    score: 0,
  },
  {
    id: "5",
    name: "Rina Takahashi",
    score: 0,
  },
  {
    id: "6",
    name: "Yusuke Watanabe",
    score: 0,
  },
];

export type GameContext = {
  deck: Card[];
  players: Player[];
  playedCards: Card[];
  createDeck: (selectedCard: Card[]) => void;
  playCard: () => Card | undefined;
  addPoints: (id: string) => void;
  nameCard: (name: string) => void;
};

export const GameLayout = () => {
  const [deck, setDeck] = useState<Card[]>(dummyDeck);
  const [players, setPlayers] = useState<Player[]>(dummyPlayers);
  const [playedCards, setPlayedCards] = useState<Card[]>([]);

  const createDeck = (selectedCard: Card[]) => {
    setDeck(
      [...selectedCard, ...selectedCard, ...selectedCard].sort(
        () => Math.random() - 0.5
      )
    );
  };

  const playCard = () => {
    const card = deck.shift();
    if (!card) {
      return;
    }
    setDeck([...deck]);
    setPlayedCards([...playedCards, card]);
    return card;
  };

  const addPoints = (id: string) => {
    const scoreAddedPlayers = players.map((player) => {
      if (player.id === id) {
        return {
          ...player,
          score: player.score + playedCards.length,
        };
      }
      return player;
    });

    setPlayers([...scoreAddedPlayers]);
    setPlayedCards([]);
  };

  const nameCard = (name: string) => {
    const lastPlayedCard = playedCards.at(-1);

    if (!lastPlayedCard) {
      return;
    }

    const namedDeck = deck.map((card) => {
      if (card.id === lastPlayedCard.id) {
        // すでに名前がついていたら名前を更新しない
        if (card.name !== "") {
          return card;
        }
        return {
          ...card,
          name: name,
        };
      }
      return card;
    });

    setDeck([...namedDeck]);
  };

  return (
    <Outlet
      context={
        {
          deck,
          playedCards,
          createDeck,
          playCard,
          players,
          addPoints,
          nameCard,
        } satisfies GameContext
      }
    />
  );
};
