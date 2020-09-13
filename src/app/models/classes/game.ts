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

export function updateGameScreenshots(games): Array<Game> {
  games.forEach(game => {
    game.screenshots = game.screenshots.map(screenshot => {
      return screenshot.url.replace('thumb', '1080p');
    });
  });
  return games;
}
