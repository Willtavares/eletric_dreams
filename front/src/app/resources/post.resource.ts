import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http/';
import { Feed } from '../models/feed';
import { Post } from '../models/post';

@Injectable()
export class PostResource {
  private url = 'http://localhost:8081/api/posts';

  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.url);
  }
}
