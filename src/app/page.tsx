'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useDeck } from './hooks/use-deck';
export default function DeckSufflingGame() {
  const { deck, drawnCards, addDeck, refreshDeck, drawCards } = useDeck();

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="space-y-6">
        <div className="flex gap-4 justify-center">
          <Button onClick={drawCards} disabled={deck.length === 0}>
            Draw Cards ({deck.length} remaining)
          </Button>
          <Button onClick={refreshDeck}>Refresh Deck</Button>
          <Button onClick={addDeck}>Add Deck</Button>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          {drawnCards.map((card, index) => (
            <Card
              key={index}
              className={`w-24 h-36 flex items-center justify-center ${
                card.suit === '♥' || card.suit === '♦'
                  ? 'text-red-600'
                  : 'text-black'
              }`}
            >
              <CardContent className="flex flex-col items-center justify-center">
                <div className="text-2xl">{card.value}</div>
                <div className="text-4xl">{card.suit}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {deck.length === 0 && (
          <div className="text-center text-gray-600">
            No cards remaining. Click Refresh Deck to start over.
          </div>
        )}
      </div>
    </div>
  );
}
