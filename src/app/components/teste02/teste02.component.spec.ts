import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teste02Component } from './teste02.component';

describe('Teste02Component', () => {
  let component: Teste02Component;
  let fixture: ComponentFixture<Teste02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Teste02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teste02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
