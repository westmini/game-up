import {Platform} from './platform';

export class Game {
  title: string;
  description: string;
  rating: number;
  releaseDate: Date;
  platforms: Array<Platform>;
}

