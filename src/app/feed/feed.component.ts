import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

    public tweets = [
        {
            user: 'stevie',
            name: 'Stevie Feliciano',
            body: 'Stevie Feliciano is a library scientist living in New York City. She likes to '
                + 'spend her time reading, running, and writing.',
            likes: [],
            avatar: '../assets/images/avatar/stevie.jpg'
        },
        {
            user: 'veronika',
            name: 'Veronika Ossi',
            body: 'Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying.',
            likes: ['jenny', 'stevie'],
            avatar: '../assets/images/avatar/veronika.jpg'
        },
        {
            user: 'jenny',
            name: 'Jenny Hess',
            body: 'Jenny is a student studying Media Management at the New School.',
            likes: [],
            avatar: '../assets/images/avatar/jenny.jpg'
        }
    ];

    constructor() { }

    ngOnInit() {
    }

    public handleLikedTweetFromChild(tweet) {
        console.log(tweet);
    }

}
