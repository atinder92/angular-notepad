import { Note } from "../model/note.model";

export class NoteAppService{

    private notes:Note[] = [];

    addNote(noteString:string,createdDate:Date):void{
        this.notes.push(new Note(noteString,createdDate));
    }

    getNotes():Note[] {
        return this.notes;
    }
    logNotes():void{
        console.log(this.notes);
    }


}