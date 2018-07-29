import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../models/post';
import { PostResource } from '../../resources/post.resource';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public feedId: string;
  public postList: Post[];

  constructor(
    private route: ActivatedRoute,
    private postResource: PostResource
  ) { }

  ngOnInit() {
    this.feedId = this.route.snapshot.params.feed;
    this.loadPosts();
  }

  private loadPosts() {
    this.postResource.getAll().subscribe(result => {
      this.postList = result.filter(p => p.feed === this.feedId);
    });
  }

}
