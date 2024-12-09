import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarAgendaComponent } from './nav-bar-agenda/nav-bar-agenda.component';
import { HomeAgendaComponent } from './home-agenda/home-agenda.component';
import { TableAgendaComponent } from './table-agenda/table-agenda.component';
import { FormsAgendaComponent } from './forms-agenda/forms-agenda.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavBarAgendaComponent,
    HomeAgendaComponent,
    TableAgendaComponent,
    FormsAgendaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
