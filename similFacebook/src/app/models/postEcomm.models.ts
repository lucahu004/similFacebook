export class PostEComm{
    push(arg0: PostEComm) {
      throw new Error('Method not implemented.');
    }
    posts: Post[]
    commenti: Comment[]
}

export class Post{
    id: number;
    autore: string;
    testo: string;
    like: number;
    push: any;

    constructor(autore: string, testo: string, like?:number, id?:number) {
        this.id = id || 0
        this.autore = autore
        this.testo = testo
        this.like = like || 0
    }

}

export class Comment{
    public testo: string
    public id:number
    public autore:string

    constructor(id:number, autore:string,testo: string){
        this.testo = testo
        this.id=id
        this.autore=autore

    }
}