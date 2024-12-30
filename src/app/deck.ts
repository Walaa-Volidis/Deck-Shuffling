export type Genre = 'Action' | 'Roman' | 'Comedy';
export type Suits = 'hearts' | 'diamonds' | 'clubs' | 'spades';
export type CardRank =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | 'J'
  | 'Q'
  | 'K';

export type Card = {
  suits: Suits;
  cardRank: CardRank;
};

export type Deck = Card[];

export function generateDeck() {
  const deck: Card[] = [];
  const cardRanks: CardRank[] = [
    '1',
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
  const suits: Suits[] = ['hearts', 'diamonds', 'clubs', 'spades'];
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < cardRanks.length; j++) {
      deck.push({ suits: suits[i], cardRank: cardRanks[j] });
    }
  }

  //shuffle deck
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}
