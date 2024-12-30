import React from 'react';
import { Card as ShadcnCard } from '@/components/ui/card';
import { Card } from './deck';
import './globals.css';

export const RenderCard: React.FC<{ card: Card }> = ({ card }) => {
  return (
    <ShadcnCard className="card">
      <div className="card-rank">{card.cardRank}</div>
      <RenderSuit suits={card.suits} cardRank={card.cardRank} />
      <div className="card-rank bottom">{card.cardRank}</div>
    </ShadcnCard>
  );
};
const RenderSuit: React.FC<{ suits: string; cardRank: string }> = ({
  suits,
  cardRank,
}) => {
  const renderSuitSymbol = (suit: string) => {
    switch (suit) {
      case 'hearts':
        return '♥';
      case 'diamonds':
        return '♦';
      case 'clubs':
        return '♣';
      case 'spades':
        return '♠';
    }
  };

  const repeatSuitSymbol = (suit: string, cardRank: string) => {
    const suitSymbol = renderSuitSymbol(suit);
    const rankNumber = parseInt(cardRank, 10);
    const repeatCount = isNaN(rankNumber) ? 1 : rankNumber;
    return Array(repeatCount).fill(suitSymbol).join(' ');
  };
  return <div className="card-suit">{repeatSuitSymbol(suits, cardRank)}</div>;
};
