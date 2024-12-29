import { useEffect, useState } from 'react';
import { Deck, generateDeck } from '../deck';
export function useDeck() {
  const [deck, setDeck] = useState<Deck>(
    localStorage.getItem('deck')
      ? JSON.parse(localStorage.getItem('deck') as string)
      : generateDeck()
  );
  const [drawnCards, setDrawnCards] = useState<Deck>(
    localStorage.getItem('drawnCards')
      ? JSON.parse(localStorage.getItem('drawnCards') as string)
      : []
  );
  const [suffledDeck, setSuffledDeck] = useState<Deck>([]);

  //auto draw cards after 5sec
  useEffect(() => {
    localStorage.setItem('deck', JSON.stringify(deck));
    const interval = setInterval(() => {
      drawCards();
    }, 5000);
    return () => clearInterval(interval);
  }, [deck]);

  useEffect(() => {
    localStorage.setItem('drawnCards', JSON.stringify(drawnCards));
  }, [drawnCards]);

  const refreshDeck = () => {
    //store the last 10 suffled cards
    const newDeck = generateDeck();
    setDeck(newDeck);
    setDrawnCards([]);
    setSuffledDeck(newDeck.slice(-10));
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
