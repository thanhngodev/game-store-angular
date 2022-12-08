import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private http: HttpClient) {}
  getGameList() {
    let url = `https://www.freetogame.com/api/games`;
    return this.http.get(url);
  }
}
