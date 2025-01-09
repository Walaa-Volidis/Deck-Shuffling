import { useEffect, useState } from 'react';
import { Deck, generateDeck, shuffleDeck } from '../deck';
export function useDeck() {
  const [deck, setDeck] = useState<Deck>(generateDeck());
  const [drawnCards, setDrawnCards] = useState<Deck>([]);
  const [shuffledDeck, setShuffledDeck] = useState<Deck>([]);

  useEffect(() => {
    const drawn = JSON.parse(localStorage.getItem('drawnCards') as string);
    if (drawn) setDrawnCards(drawn);
    const cards = JSON.parse(localStorage.getItem('deck') as string);
    if (cards) setDeck(cards);
  }, []);

  useEffect(() => {
    //localStorage.setItem('deck', JSON.stringify(deck));
    const interval = setInterval(() => {
      drawCards();
    }, 5000);
    return () => clearInterval(interval);
  }, [deck]);

  useEffect(() => {
    //localStorage.setItem('drawnCards', JSON.stringify(drawnCards));
  }, [drawnCards]);

  const refreshDeck = (deckCount: number = 1) => {
    const newDeck = generateDeck(deckCount);
    const newShuffledDeck = shuffleDeck(newDeck);
    setDeck(newShuffledDeck);
    setDrawnCards([]);
    setShuffledDeck(newShuffledDeck.slice(-10));
  };

  const drawCards = () => {
    if (deck.length === 0) return;
    const cardsCount = Math.min(deck.length, 5);
    const drawn = deck.slice(0, cardsCount);
    const remianing = deck.slice(cardsCount);
    setDeck(remianing);
    setDrawnCards(drawn);
  };

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
    shuffledDeck,
  };
}
