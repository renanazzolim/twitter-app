import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

    @Input() tweet;
    @Output() likedTweetChild = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  public likeTweet(tweet) {
    this.likedTweetChild.emit(tweet);
  }

}
