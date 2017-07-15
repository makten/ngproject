import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  @Input("is-favorite") isFavorite: boolean = false;
  @Output('is-changed') change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite
    this.change.emit({newValue: this.isFavorite});
  }
  
}

export interface FavoriteChangedEventArgs {
    newValue: boolean;
}
