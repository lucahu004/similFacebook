export class PostEComm{
    posts: Post[]
    commenti: Comment[]
}

export class Post{
    id: number;
    autore: string;
    testo: string;
    like: number;

    constructor(id:number, autore: string, testo: string, like:number) {
        this.id = id
        this.autore = autore
        this.testo = testo
        this.like = like
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