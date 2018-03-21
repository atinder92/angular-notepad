import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NoteAppService } from "../../services/note-app.service";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {

  private noteInput:string;
  private noteCreatedSuccess:boolean = false;
  @ViewChild('noteStringRef') textareaElement:ElementRef; 
  constructor(private noteAppService:NoteAppService) { }

  ngOnInit() {

  }
   
  saveNote(){
    var currentDate = new Date();
    this.noteAppService.addNote(this.noteInput,currentDate);
    this.noteCreatedSuccess = true;
    this.noteAppService.logNotes();
  }

  //Resets the noteInput to original state
  newNote(noteForm:NgForm){
    noteForm.controls["noteInput"].reset();
    this.noteCreatedSuccess = false;
  }

}
