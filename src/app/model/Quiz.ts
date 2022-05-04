export class Quiz{
    constructor(
        name:string,
        description:string,
        bestScore : number,
        worstScore: number, 
        date: String,
        id_User?:any, 

    ){}
    name: String; 
    description : String; 
    bestScore : number;
    worstScore: number;
    date: String;
    id_User?:any;
}