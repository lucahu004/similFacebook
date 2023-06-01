import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post, PostEComm } from './models/postEcomm.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: PostEComm
  oPC: Observable<PostEComm>;
  serviceURL: string = 'https://my-json-server.typicode.com/lucahu004/dbFacebook/db';
  error_appear: boolean
  post_height: number;

  constructor(public http: HttpClient) {
    this.makeTypedRequest();
  }

  makeTypedRequest() : void
  {
    
    this.oPC = this.http.get<PostEComm>(this.serviceURL);
    this.oPC.subscribe(d => {this.data = d});
  } 
}

