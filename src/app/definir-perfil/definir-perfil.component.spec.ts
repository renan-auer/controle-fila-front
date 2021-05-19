import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinirPerfilComponent } from './definir-perfil.component';

describe('DefinirPerfilComponent', () => {
  let component: DefinirPerfilComponent;
  let fixture: ComponentFixture<DefinirPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefinirPerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinirPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
