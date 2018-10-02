import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FeedService {

    public url = 'http://localhost:3000/tweets';

    constructor(private http: Http) { }

    public getTeweets(): Observable<any> {
        return this.http.get(this.url);
    }

    public likeTweet(tweet) {
        return this.http.put(`${this.url}/${tweet.id}`, tweet);
    }
}
