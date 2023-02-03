import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorPeliculasComponent } from './gestor-peliculas.component';

describe('GestorPeliculasComponent', () => {
  let component: GestorPeliculasComponent;
  let fixture: ComponentFixture<GestorPeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestorPeliculasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestorPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
