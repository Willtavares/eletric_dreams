import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http/';
import { Feed } from '../models/feed';

@Injectable()
export class FeedResource {
  private url = 'http://localhost:8081/api/feeds';

  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<Feed[]> {
    return this.httpClient.get<Feed[]>(this.url);
  }
}
