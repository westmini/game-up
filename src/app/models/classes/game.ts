import {Platform} from './platform';

export class Game {
  id: string;
  gameName: string;
  description: string;
  genre?: string;
  url: string;
  screenshots?: any;
  rating?: number;
  releaseDate?: Date;
  platforms?: Array<Platform>;
}

