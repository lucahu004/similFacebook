import { Component, Input } from '@angular/core';
import { Post, Comment } from '../models/postEcomm.models';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() post: Post[];
  @Input() comment: Comment[] = [];
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

  add_comment(autore: HTMLInputElement, testo: HTMLTextAreaElement, idpost: number){
    if (autore.value !== '' && testo.value !== ''){
      this.error_appear = false
      if (Array.isArray(this.comment)) {
        this.comment.push(new Comment(autore.value, testo.value, idpost));
      } else {
        this.comment = [new Comment(autore.value, testo.value, idpost)];
      }
      autore.value = '';
      testo.value = '';
    }else{
      this.error_appear = true
      autore.value = ''
      testo.value = ''
    }
  }
}
