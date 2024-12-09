import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAgendaComponent } from './table-agenda.component';

describe('TableAgendaComponent', () => {
  let component: TableAgendaComponent;
  let fixture: ComponentFixture<TableAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableAgendaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
