import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token:string = 'BQDQ1WXpxBiNK0wpsKitFkdhpga6IfC22v4LU9rVnEOer0qj2Bo2LaBmm3Bf0ORlKHscxwWO1u0hOTjJmUQ';
  headers = new HttpHeaders({
    'Authorization': 'Bearer ' + this.token
  });

  constructor(private http:HttpClient) { }

  getNewReleases() {
    const headers = this.headers;
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }

  getArtist(searchTerm:string) {
    const headers = this.headers;
    return this.http.get(`https://api.spotify.com/v1/search?query=${searchTerm}&type=artist&offset=0&limit=15`, { headers });
  }

}
