import { Component, OnInit } from '@angular/core';
import { NoteAppService } from "../../services/note-app.service";

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {

  constructor(private noteAppService:NoteAppService) { }

  ngOnInit() {
    this.noteAppService.greet();
  }

}
