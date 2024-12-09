import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAgendaComponent } from './home-agenda/home-agenda.component';
import { TableAgendaComponent } from './table-agenda/table-agenda.component';
import { FormsAgendaComponent } from './forms-agenda/forms-agenda.component';

const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch:'full'},
  { path: 'home', component: HomeAgendaComponent},
  { path: 'agenda', component: TableAgendaComponent},
  { path: 'agenda/:id', component: FormsAgendaComponent},
  { path: 'agenda', component: FormsAgendaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
