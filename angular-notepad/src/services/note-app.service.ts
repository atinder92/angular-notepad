import { Note } from "../model/note.model";
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import * as _ from 'underscore';

export class NoteAppService{

    private notes:Note[] = [];
    private deletedNotes:Note[] = [];
    private subject = new Subject<any>();

    addNote(noteString:string,createdDate:Date):void{
        //create id from length of array
        var id = this.notes.length;
        id++;
        this.notes.push(new Note(id,noteString,createdDate));
    }


    deleteNote(id:number):void {
        this.notes = _.filter(this.notes, function(note) {
            return note.id != id;
          });
         
    }

    logNotes():void{
        console.log(this.notes);
    }

    getNotes():void {
        this.subject.next(this.notes);
    }

    getNotesObservable():Observable<any> {
        return this.subject.asObservable();
    }

}