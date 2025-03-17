export default interface Game extends GameDTO {
  id: string;
  createdAt: string;
}

export enum GameStatus {
  drop = 'DROP',
  complete = 'COMPLETE',
  skipped = 'SKIPPED',
}

export interface GameDTO {
  name: string;
  comment: string;
  status: GameStatus;
}
