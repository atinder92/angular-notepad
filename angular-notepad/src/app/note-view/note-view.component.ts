import { Component, OnInit,Input } from '@angular/core';
import { Note } from '../../model/note.model';
import { DatePipe } from '@angular/common';
import { NoteAppService } from '../../services/note-app.service';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit {

  @Input() note:Note;
  constructor(private noteAppService:NoteAppService) { }

  ngOnInit() {
  }

  deleteNote(id:number):void{
      this.noteAppService.deleteNote(id);
  }
}
