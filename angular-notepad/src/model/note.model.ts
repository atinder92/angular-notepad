export class Note{
    id:number;
    noteString:string;
    createdDate:Date;

    constructor(id:number,noteString:string,createdDate:Date){
        this.id = id;
        this.noteString = noteString;
        this.createdDate = createdDate;
    }

}