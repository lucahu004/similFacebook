export class PostEComm{
    posts: Post[]
    comments: Comment[]
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

    add_like(){
        this.like += 1
    }
    

}

export class Comment{
    public testo: string;
    public id:number;
    public autore:string;
    public idpost: number;
    push: any

    constructor( autore:string,testo: string, id?:number, idpost?: number){
        this.testo = testo
        this.id=id || 0
        this.autore=autore
        this.idpost = idpost;

    }
}