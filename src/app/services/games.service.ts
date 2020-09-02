import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  endPoint = 'http://localhost:4200';

  constructor(private httpClient: HttpClient) {
  }

  getGames() {
    this.endPoint = this.endPoint + '/games';
    let headers = new HttpHeaders();
    headers = headers.set('user-key', '3529e735235b970f787422c16376f395');
    const filters = {fields: '*'};
    return this.httpClient.post(this.endPoint, filters, {headers});
  }

  getGenres() {
    this.endPoint = this.endPoint + '/genres';
    let headers = new HttpHeaders();
    headers = headers.set('user-key', '3529e735235b970f787422c16376f395');
    return this.httpClient.post(this.endPoint, 'fields *;', {headers});
  }
}
