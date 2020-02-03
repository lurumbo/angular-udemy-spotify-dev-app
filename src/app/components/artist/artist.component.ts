import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artist:any = {};
  loading:boolean;

  constructor(private router:ActivatedRoute, private _spotifyService:SpotifyService) { 
    this.loading = true;
    this.router.params.subscribe(params => {
      this.getArtist(params['id']);
      console.log(params['id'])
    });
  }

  ngOnInit() {
  }

  getArtist(id:string) {
    this.loading = true;
    return this._spotifyService.getArtist(id).subscribe(artist =>{ 
      this.artist = artist;
      this.loading = false;
      console.log(this.artist)
    })
  }

}
