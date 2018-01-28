import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { CreateNoteComponent } from "./app/create-note/create-note.component";
import { TrashComponent } from "./app/trash/trash.component";
import { SavedNotesComponent } from "./app/saved-notes/saved-notes.component";
import { PageNotFoundComponent } from "./app/page-not-found/page-not-found.component";
import { SignupFormComponent } from "./app/signup-form/signup-form.component";
import { SigninFormComponent } from "./app/signin-form/signin-form.component";

//components

const appRoutes: Routes = [
    {path:'',component:CreateNoteComponent},
    {path:'trash',component:TrashComponent},
    {path:'notes',component:SavedNotesComponent},
    {path:'signup',component:SignupFormComponent},
    {path:'signin',component:SigninFormComponent},
    { path: '**', component: PageNotFoundComponent }
];
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})  
export class AppRoutingModule{

}