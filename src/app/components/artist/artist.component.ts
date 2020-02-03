import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [`
    th, tr {
      color: white; !important
    }
  `]
})
export class ArtistComponent implements OnInit {

  artist:any = {};
  tracks:any = [] = [];
  loading:boolean;

  constructor(private router:ActivatedRoute, private _spotifyService:SpotifyService) { 
    this.loading = true;
    this.router.params.subscribe(params => {
      console.log(params['id'])
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
      
    });
  }

  ngOnInit() {
  }

  getArtist(id:string) {
    this.loading = true;
    return this._spotifyService.getArtist(id).subscribe(artist => { 
      this.artist = artist;
      this.loading = false;
      console.log(this.artist)
    })
  }

  getTopTracks(id:string) {
    return this._spotifyService.getTopTracks(id).subscribe(tracks => {
      console.log('tracks!', tracks);
      this.tracks = tracks;
    })
  }

}
