import {Platform} from './platform';

export class Game {
  id: string;
  gameName: string;
  description: string;
  artworks?: any;
  genre?: string;
  videos?: string;
  cover?: string;
  url: string;
  screenshots?: any;
  rating?: number;
  releaseDate?: Date;
  platforms?: Array<Platform>;


}

export function getGameScreenshots(games?: Array<Game>, game?: Game): Array<string> {
  const contentList: Array<string> = [];
  if (games.length > 0) {
    games.forEach(gameValue => {
      contentList.push(gameValue.screenshots[0]);
    });
    console.log('Screenshot List From Array Of Games: ', contentList);
    return contentList;
  } else {
    game.screenshots.forEach(screenshot => {
      contentList.push(screenshot);
    });
    console.log('Screenshot List From Single Game Object: ', contentList);
    return contentList;
  }
}

export function updateGameScreenshots(games): Array<Game> {
  games.forEach(game => {
    game.screenshots = game.screenshots.map(screenshot => {
      return screenshot.url.replace('thumb', '1080p');
    });
    if (game.cover) {
      game.cover = game.cover.replace('t_thumb', 't_1080p');
    }
  });

  return games;
}

export function updateGameArtwork(games): void {
  games.forEach(game => {
    if (game.artworks) {
      game.artworks = game.artworks.filter(artwork => {
        return artwork.width > 1200;
      });

      game.artworks = game.artworks.map(artwork => {
        return artwork.url.replace('thumb', '1080p');
      });
    }
  });
  console.log('Games Returned:', games);
}

export function updateGameVideos(games): Array<Game> {
  games.forEach(game => {

    const youtube = 'https://www.youtube.com/embed/';
    game.videos = game.videos.map(video => {
      return youtube.concat('', video.video_id);
    });
  });
  return games;
}
