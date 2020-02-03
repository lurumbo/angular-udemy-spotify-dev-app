import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token:string = 'BQAXyuYiTClyclsNu6Wdldx3DXVbtmyx0rHFDulkKRNHZfBAxoPXm3FcTDXb9Q7lhvCf1GJz2S2G5D5lJlc';
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

  getArtist(searchTerm:string) {
    return this.getQueryString(`search?query=${searchTerm}&type=artist&offset=0&limit=15`)
               .pipe(map(response => response['artists'].items));
  }

}
