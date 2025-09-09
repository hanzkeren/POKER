import { describe, it, expect } from 'vitest';
import { createDeck, shuffle } from '../server/poker-engine';

describe('poker engine', () => {
  it('creates 52-card deck', () => {
    const deck = createDeck();
    expect(deck.length).toBe(52);
    const set = new Set(deck);
    expect(set.size).toBe(52);
  });

  it('shuffles deck', () => {
    const deck = createDeck();
    const copy = deck.slice();
    shuffle(deck);
    // after shuffle, order should differ (probabilistic)
    expect(deck).not.toEqual(copy);
  });
});
