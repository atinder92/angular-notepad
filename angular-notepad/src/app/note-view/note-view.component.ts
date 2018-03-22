import { Component, OnInit,Input } from '@angular/core';
import { Note } from '../../model/note.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit {

  @Input() note:Note;
  constructor() { }

  ngOnInit() {
  }

}
