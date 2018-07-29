import { Component, OnInit } from '@angular/core';
import { Feed } from '../../models/feed';
import { FeedResource } from '../../resources/feed.resource';
import { Router } from '@angular/router';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  public feedList: Feed[];

  constructor(
    private feedResource: FeedResource,
    private router: Router) { }

  ngOnInit() {
    this.feedResource.getAll().subscribe(result => {
      this.feedList = result;
    });
  }

  public goToPostsPage(feed: Feed) {
    this.router.navigate(['posts', feed._id]);
  }

}
