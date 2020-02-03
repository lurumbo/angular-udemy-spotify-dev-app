import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styles: []
})
export class CardsComponent implements OnInit {

  @Input() items:any[] = [];

  constructor(private router:Router) { 
    console.log('items', this.items)
  }

  ngOnInit() {
  }

  getArtist(item:any) {
    console.log(item);
    let id:string;
    id = (item.type === 'artist') ? item.id : item.artists[0].id;
    console.log(id);
    this.router.navigate(['artist', id]);
  }

}
