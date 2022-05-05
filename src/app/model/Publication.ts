export class Publication{
    title:String;
    publication_txt:string;
    createdAt: Date
    pub_id:number;
    likes: number; 
    dislikes:number;
    user_id?: any
    constructor( pub_id:number, title:String, publication_txt:string, createdAt: Date,user_id : any){}
    
}


