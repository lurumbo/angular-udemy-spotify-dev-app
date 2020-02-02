import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token:string = 'BQAtlY11i7brtUMtWbI5BRaM0wuAnilveEJUMrRGDOkYCpsXEIKETorZjXDSlgUTi5FD1pHEXaRBKkgU5_A';
  headers = new HttpHeaders({
    'Authorization': 'Bearer ' + this.token
  });

  constructor(private http:HttpClient) { }

  getNewReleases() {
    const headers = this.headers;
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }

}
