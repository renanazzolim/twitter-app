import { FeedService } from './feed.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.css'],
    providers: [FeedService]
})
export class FeedComponent implements OnInit {
    // json-server --watch twitter_db.json
    public tweets: any = [];

    public likedTweet = undefined;
    public currentUser = 'stevie';

    constructor(private feedService: FeedService) { }

    ngOnInit() {
        this.feedService.getTeweets().subscribe(data => {
            this.tweets = data.json();
        });
    }

    public handleLikedTweetFromChild(tweet) {
        tweet.likes.push(this.currentUser);
        this.feedService.likeTweet(tweet).subscribe(data => {
            console.log(data.json());
        });
    }


}
