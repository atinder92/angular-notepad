import { Component, OnInit } from '@angular/core';
import { NoteAppService } from '../../services/note-app.service';
import { Note } from '../../model/note.model';

@Component({
  selector: 'app-saved-notes',
  templateUrl: './saved-notes.component.html',
  styleUrls: ['./saved-notes.component.css']
})
export class SavedNotesComponent implements OnInit {

  notes: Note[];
  constructor(private noteAppService:NoteAppService) { }

  ngOnInit() {
    this.notes = this.noteAppService.getNotes();
  }

}
