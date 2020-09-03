import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  endPoint = 'http://localhost:4200';

  constructor(private httpClient: HttpClient) {
  }

  getGames(searchTitle: string) {
    const gamesEndpoint = this.endPoint + '/games';
    let headers = new HttpHeaders();
    headers = headers.set('user-key', '3529e735235b970f787422c16376f395');
    return this.httpClient.post(gamesEndpoint, 'fields name; search "'  + searchTitle + '";' + ' limit 20;', {headers});
  }

  getGenres() {
    const gamesEndpoint = this.endPoint + '/genres';
    let headers = new HttpHeaders();
    headers = headers.set('user-key', '3529e735235b970f787422c16376f395');
    return this.httpClient.post(this.endPoint, 'fields involved_companies.*;', {headers});
  }
}
