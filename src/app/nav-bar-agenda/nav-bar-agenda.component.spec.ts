import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarAgendaComponent } from './nav-bar-agenda.component';

describe('NavBarAgendaComponent', () => {
  let component: NavBarAgendaComponent;
  let fixture: ComponentFixture<NavBarAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavBarAgendaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavBarAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
