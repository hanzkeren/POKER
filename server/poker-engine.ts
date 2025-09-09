export type Card = `${number}${'H'|'D'|'C'|'S'}`;

export function createDeck(): Card[] {
  const suits = ['H','D','C','S'] as const;
  const deck: Card[] = [];
  for (let s of suits) {
    for (let n=2;n<=14;n++) {
      deck.push(`${n}${s}` as Card);
    }
  }
  return deck;
}

export function shuffle(deck: Card[]): void {
  for (let i = deck.length -1; i>0; i--) {
    const j = Math.floor(Math.random() * (i+1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}
