import { Note } from "../model/note.model";

export class NoteAppService{

    private notes:Note[] = [];

    addNote(noteString:string,createdDate:Date):void{
        this.notes.push(new Note(noteString,createdDate));
    }

    logNotes():void{
        console.log(this.notes);
    }
    

}