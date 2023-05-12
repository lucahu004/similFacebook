import { Component } from '@angular/core';
import { Post } from './post/post.model';
import { Observable } from 'rxjs';
import { ServiceResponse } from './serviceresponce.model'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Post[]
  oServiceResponse: Observable<ServiceResponse>;
  serviceURL: string = 'https://my-json-server.typicode.com/PaoloCarugati/facebook/posts';

  constructor(public http: HttpClient) {
    this.makeTypedRequest();
  }

  makeTypedRequest() : void
  {
    
    this.oServiceResponse = this.http.get<ServiceResponse>(this.serviceURL);
    this.oServiceResponse.subscribe(d => {this.posts = d.data;});
  } 
}

