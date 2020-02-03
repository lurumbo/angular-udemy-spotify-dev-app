import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artists:any[] = [];
  loading:boolean;

  constructor(private spotifyService:SpotifyService) { }

  ngOnInit() {
  }

  search(term:string) {
    console.log('text searched', term);
    if (term === '') return this.artists = [];
    this.loading = true;
    this.spotifyService.getArtists(term)
      .subscribe( (artists:any) => {
        console.log(artists)
        this.artists = artists;
        this.loading = false;
      });

  }

}
