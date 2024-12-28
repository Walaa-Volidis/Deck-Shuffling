import { useState } from 'react';
import { Deck, generateDeck } from '../deck';
export function useDeck() {
  const [deck, setDeck] = useState<Deck>(generateDeck());
  const [drawnCards, setDrawnCards] = useState<Deck>([]);

  const refreshDeck = () => {
    setDeck(generateDeck());
    setDrawnCards([]);
  };

  const drawCards = () => {
    if (deck.length === 0) return;
    const cardsCount = Math.min(deck.length, 5);
    const drawn = deck.slice(0, cardsCount);
    const remianing = deck.slice(cardsCount);
    setDeck(remianing);
    setDrawnCards(drawn);
  };

  return {
    generateDeck,
    deck,
    drawnCards,
    refreshDeck,
    drawCards,
  };
}
