import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { CreateNoteComponent } from "./app/create-note/create-note.component";
import { TrashComponent } from "./app/trash/trash.component";
import { SavedNotesComponent } from "./app/saved-notes/saved-notes.component";

//components

const appRoutes: Routes = [
    {path:'',component:CreateNoteComponent},
    {path:'trash',component:TrashComponent},
    {path:'notes',component:SavedNotesComponent}
];
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})  
export class AppRoutingModule{

}