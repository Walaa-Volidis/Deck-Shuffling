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
    const deck: { suit: string; value: string }[] = [];

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
  const [deck, setDeck] = useState<{ suit: string; value: string }[]>(
    generateDeck()
  );
  const [drawnCards, setDrawnCards] = useState<
    { suit: string; value: string }[]
  >([]);
  const [deckCount, setDeckCount] = useState(1);

  const addDeck = () => {
    setDeckCount((prev) => prev + 1);
    setDeck((prev) => [...prev, ...generateDeck()]);
  };

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
    deckCount,
    drawnCards,
    addDeck,
    refreshDeck,
    drawCards,
  };
}
