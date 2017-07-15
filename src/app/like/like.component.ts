import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'item-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input('is-liked') isLiked: boolean = false;
  @Input('like-count') likeCount: number = 0;

  constructor() { }

  ngOnInit() {
  }

  toggleLike(){
    this.isLiked = !this.isLiked;
    this.likeCount += !this.isLiked ? -1 : 1;

  }

}
