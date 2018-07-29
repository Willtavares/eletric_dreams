import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { FeedComponent } from './components/feed/feed.component';
import { HttpClientModule } from '@angular/common/http';
import { PostResource } from './resources/post.resource';
import { FeedResource } from './resources/feed.resource';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: 'feeds', pathMatch: 'full' },
  { path: 'feeds', component: FeedComponent },
  { path: 'posts/:feed', component: PostComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostResource,
    FeedResource
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
