import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token:string = 'BQCnh1_zeG7fVHEJ7Gg80H9nI6weZTzosTuEIcr1II2O8HHF5q1IG2T7Iv-ivoYHe7Kt02Wg233aMbJ7Aj0';
  headers = new HttpHeaders({
    'Authorization': 'Bearer ' + this.token
  });

  constructor(private http:HttpClient) { }

  getQueryString(queryString:string) {
    const url = `https://api.spotify.com/v1/${queryString}`;
    const headers = this.headers;
    return this.http.get(url, { headers })
  }

  getNewReleases() {
    return this.getQueryString('browse/new-releases')
               .pipe(map(response => response['albums'].items));
  }

  getArtists(searchTerm:string) {
    return this.getQueryString(`search?query=${searchTerm}&type=artist&offset=0&limit=15`)
               .pipe(map(response => response['artists'].items));
  }

  getArtist(id:string) {
    return this.getQueryString(`artists/${id}`);
  }

  getTopTracks(id:string) {
    return this.getQueryString(`artists/${id}/top-tracks?country=us`)
               .pipe(map(response => response['tracks']));;
  }

}
