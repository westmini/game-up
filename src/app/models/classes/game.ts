import {Platform} from './platform';

export class Game {
  gameName: string;
  description: string;
  genre: string;
  url: string;
  rating?: number;
  releaseDate?: Date;
  platforms?: Array<Platform>;
}

