import { Component, Input } from '@angular/core';
import { Post } from '../models/postEcomm.models';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() post: Post[];
  @Input() comment: Comment[];
  comment_appear:number
  error_appear:boolean
  router: any;

  constructor(){
    this.comment_appear = -1
    this.error_appear = false
  }
  
  add_like(index: number){
    if (this.post.length > index) {
      this.post[index].like += 1;
    }
  }

  comment_section_appear(index: number){

    this.error_appear = false;

    if (this.comment_appear === index) {
      this.comment_appear = -1; // Nascondi la sezione dei commenti
    } else {
      this.comment_appear = index; // Mostra la sezione dei commenti per il post specifico
    }
  }

  add_comment(commento: HTMLTextAreaElement){
    if (commento.value == ''){
      this.error_appear = true
    }else{
      this.error_appear = false
      //this.post.add_comment(commento.value)
      commento.value = ''
    }
    }
}
