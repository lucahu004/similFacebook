import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post, PostEComm, Comment} from './models/postEcomm.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  post: Post[]= []
  comment: Comment[]= []
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
    this.oPC.subscribe(d => {this.data = d;
      this.post = this.data.posts || [];
      this.comment = this.data.commenti || [];
    });
  } 

  posta(autore: HTMLInputElement, testo: HTMLTextAreaElement) {
    if (autore.value !== '' && testo.value !== '') {
      console.log('adding post author and text')
      this.post_height = 470;
      this.error_appear = false;
  
      this.post.push(new Post(autore.value, testo.value));
      autore.value = '';
      testo.value = '';
    } else {
      this.error_appear = true;
      this.post_height = 510;
    }
  } 
}

