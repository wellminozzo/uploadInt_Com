import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquinaNaoEncontradaComponent } from './maquina-nao-encontrada.component';

describe('MaquinaNaoEncontradaComponent', () => {
  let component: MaquinaNaoEncontradaComponent;
  let fixture: ComponentFixture<MaquinaNaoEncontradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaquinaNaoEncontradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaquinaNaoEncontradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
