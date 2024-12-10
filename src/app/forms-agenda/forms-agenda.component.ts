import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AgendaService } from '../agenda.service';

@Component({
  selector: 'app-forms-agenda',
  templateUrl: './forms-agenda.component.html',
  styleUrl: './forms-agenda.component.css'
})
export class FormsAgendaComponent {

    formGroupagenda: FormGroup;
    isEditing: boolean = false;
  
      constructor(private router: Router,
                  private activatedRouter: ActivatedRoute,
                  private service: AgendaService,
                  private formbuilder: FormBuilder
                  ){
                    this.formGroupagenda = formbuilder.group({
                      id:                 [''],
                      titulo:             [''],
                      descricao:          [''],
                      data:               [''],
                      hora:               ['']
                    })
                  };
  
     ngOnInit(): void {
     const id = Number(this.activatedRouter.snapshot.paramMap.get("id"))
       if(id != 0){   
      this.LoadCompromissos(id);
       this.isEditing = true;  
       }
     }
  
      LoadCompromissos(id: number){
        this.service.getagendaById(id).subscribe({
          next: data => this.formGroupagenda.setValue(data)
        })
      };
  
      update(){
        this.service.update(this.formGroupagenda.value).subscribe({
          next: () => this.router.navigate(['agenda'])
        })
      }
  
      save(){
        const titulo = this.formGroupagenda.get('titulo')?.value;
        if ( !titulo || titulo.trim() === "" ){
          alert("Coloque o titulo")
        }
        else{
        this.service.save(this.formGroupagenda.value).subscribe({
          next: () => this.router.navigate([`/agenda`])
        })
      }
    }
  
  }


