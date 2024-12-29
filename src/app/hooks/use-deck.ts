import { useEffect, useState } from 'react';
import { Deck, generateDeck } from '../deck';
export function useDeck() {
  const [deck, setDeck] = useState<Deck>(generateDeck());
  const [drawnCards, setDrawnCards] = useState<Deck>([]);

  //auto draw cards after 5sec
  useEffect(() => {
    const interval = setInterval(() => {
      drawCards();
    }, 5000);
    return () => clearInterval(interval);
  }, [deck]);

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

  // add deck
  const addDeck = () => {
    setDeck([...deck, ...generateDeck()]);
  };

  return {
    generateDeck,
    deck,
    drawnCards,
    refreshDeck,
    drawCards,
    addDeck,
  };
}
