import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { WildcardComponent } from './wildcard/wildcard.component';

const routes: Routes = [
{path:'Book',component:BookComponent},
{path:'Technologies',component:TechnologiesComponent},
{path:'wildcard',component:WildcardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
