import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsAgendaComponent } from './forms-agenda.component';

describe('FormsAgendaComponent', () => {
  let component: FormsAgendaComponent;
  let fixture: ComponentFixture<FormsAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormsAgendaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormsAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
