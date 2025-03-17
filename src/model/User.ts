import Game from '@/model/Game';
import SggEvent from '@/model/SggEvent';

export default interface SggUser {
  id: string;
  name: string;
  logo: string;
  channel: string;
  background?: string;
  game: string;
  items: (string | null)[];
  games: Game[];
  events: SggEvent[];
}

export interface UserUpdateDTO {
  game?: string;
  items?: (string | null)[];
}
