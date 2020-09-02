import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  endPoint = 'http://localhost:4200/genres';

  constructor(private httpClient: HttpClient) {
  }

  getGames() {
    let headers = new HttpHeaders();
    headers = headers.set('user-key', '3529e735235b970f787422c16376f395');
    const filters = {fields: '*'};
    return this.httpClient.post(this.endPoint, filters, {headers});
  }
}
