import { useState } from 'react';
export function useDeck() {
  const generateDeck = () => {
    const suits: string[] = ['♠', '♥', '♦', '♣'];
    const values: string[] = [
      'A',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      'J',
      'Q',
      'K',
    ];
    const deck: object[] = [];

    suits.forEach((suit) => {
      values.forEach((value) => {
        deck.push({ suit, value });
      });
    });

    for (let i = deck.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [deck[randomIndex], deck[i]] = [deck[i], deck[randomIndex]];
    }

    return deck;
  };
  const [deck, setDeck] = useState(generateDeck());
  const [drawnCards, setDrawnCards] = useState([]);
  const [deckCount, setDeckCount] = useState(1);

  const addDeck = () => {
    setDeckCount((prev) => prev + 1);
    setDeck((prev) => [...prev, ...generateDeck()]);
  };

  return {
    generateDeck,
    deck,
    drawnCards,
    addDeck,
  };
}
