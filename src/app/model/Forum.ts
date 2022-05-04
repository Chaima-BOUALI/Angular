export class Forum{
    forumName:String;
    forumDescription:String;
    forum_id:any; 
    user_id?: any
    createdAt: Date
    constructor(forumName:String, forumDescription:String, forum_id:number, user_id?:any){}
}