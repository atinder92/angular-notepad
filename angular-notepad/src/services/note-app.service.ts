import { Note } from "../model/note.model";

export class NoteAppService{

    private notes:Note[] = [];
    private deletedNotes:Note[] = [];

    addNote(noteString:string,createdDate:Date):void{
        //create id from length of array
        var id = this.notes.length;
        id++;
        this.notes.push(new Note(id,noteString,createdDate));
    }

    getNotes():Note[] {
        return this.notes;
    }

    deleteNote(id:number):void {
        this.notes.splice(id-1,1);
    }

    logNotes():void{
        console.log(this.notes);
    }


}