import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pokemon404Component } from './pokemon404.component';

describe('Pokemon404Component', () => {
  let component: Pokemon404Component;
  let fixture: ComponentFixture<Pokemon404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pokemon404Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pokemon404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
