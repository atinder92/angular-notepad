import { Component, OnInit } from '@angular/core';
import { NoteAppService } from '../../services/note-app.service';

@Component({
  selector: 'app-saved-notes',
  templateUrl: './saved-notes.component.html',
  styleUrls: ['./saved-notes.component.css']
})
export class SavedNotesComponent implements OnInit {

  constructor(private noteAppService:NoteAppService) { }

  ngOnInit() {
    
  }

}
