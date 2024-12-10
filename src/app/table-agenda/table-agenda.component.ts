import { Component } from '@angular/core';
import { AgendaService } from '../agenda.service';
import { Router } from '@angular/router';
import { agenda } from '../../agenda';

@Component({
  selector: 'app-table-agenda',
  templateUrl: './table-agenda.component.html',
  styleUrl: './table-agenda.component.css'
})
export class TableAgendaComponent {

  agenda: agenda [] = [];

    constructor(private service: AgendaService,
    private router: Router
    ){}

    ngOnInit(){
      this.loadagenda();
    }

    loadagenda(){
      this.service.getagenda().subscribe({
        next: data => this.agenda = data
      })
    };

    delete(agenda: agenda){
      this.service.delete(agenda).subscribe({
        next: () => this.loadagenda()
      })
    };

    create(){
      this.router.navigate(['agendar'])
    };

}
