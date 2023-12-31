import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Card } from "../../features/Card/type";
import { Player } from "../Player/type";
import styled from "styled-components";

export type GameContext = {
  deck: Card[];
  players: Player[];
  playedCards: Card[];
  startGame: (selectedCard: Card[], randomlySelectedCard: Card[]) => void;
  playCard: () => Card | undefined;
  addPoints: (id: string) => void;
  nameCard: (character_name: string) => void;
};

export const GameLayout = () => {
  const [deck, setDeck] = useState<Card[]>([]);
  const [players, setPlayers] = useState<Player[]>([]);
  const [playedCards, setPlayedCards] = useState<Card[]>([]);

  const startGame = (selectedCard: Card[], randomlySelectedCard: Card[]) => {
    createDeck([...selectedCard, ...randomlySelectedCard]);
    createPlayers(selectedCard);
  };

  const createDeck = (cards: Card[]) => {
    setDeck([...cards, ...cards, ...cards].sort(() => Math.random() - 0.5));
  };

  const createPlayers = (selectedCard: Card[]) => {
    setPlayers(
      selectedCard.map((card) => ({
        id: card.id,
        name: card.user_name,
        score: 0,
      }))
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

  const nameCard = (character_name: string) => {
    const lastPlayedCard = playedCards.at(-1);

    if (!lastPlayedCard) {
      return;
    }

    const namedDeck = deck.map((card) => {
      if (
        card.id === lastPlayedCard.id &&
        (card.character_name === undefined || card.character_name === "")
      ) {
        return {
          ...card,
          character_name,
        };
      }
      return card;
    });

    setDeck([...namedDeck]);
  };

  return (
    <GameWrapper>
      <Outlet
        context={
          {
            deck,
            playedCards,
            playCard,
            players,
            addPoints,
            nameCard,
            startGame,
          } satisfies GameContext
        }
      />
    </GameWrapper>
  );
};

const GameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  margin: 0 auto;
`;
