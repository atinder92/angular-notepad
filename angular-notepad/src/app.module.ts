import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Components
import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/header/header.component';
import { ContainerComponent } from './app/container/container.component';
import { NavigationComponent } from './app/navigation/navigation.component';

import { AppRoutingModule } from "./app-routing.module";
import { CreateNoteComponent } from './app/create-note/create-note.component';
import { TrashComponent } from './app/trash/trash.component';
import { SavedNotesComponent } from './app/saved-notes/saved-notes.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    NavigationComponent,
    CreateNoteComponent,
    TrashComponent,
    SavedNotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
