'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useDeck } from './hooks/use-deck';
import { RenderCard } from './render-card';

export default function DeckSufflingGame() {
  const { deck, drawnCards, refreshDeck, drawCards, addDeck } = useDeck();
  const [deckCount, setDeckCount] = useState(1);
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="space-y-6">
        <div className="flex gap-4 justify-center">
          <Button onClick={drawCards} disabled={deck.length === 0}>
            Draw Cards ({deck.length} remaining)
          </Button>
          <Button onClick={() => refreshDeck(deckCount)}>Refresh Deck</Button>
          <Button onClick={addDeck}>Add Deck</Button>
        </div>
        <div className="flex gap-4 justify-center">
          <input
            type="number"
            value={deckCount}
            onChange={(e) => setDeckCount(Number(e.target.value))}
            min="1"
            className="border p-2"
          />
          <span>Number of Decks</span>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          {drawnCards.map((card, index) => (
            <RenderCard key={index} card={card} />
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
