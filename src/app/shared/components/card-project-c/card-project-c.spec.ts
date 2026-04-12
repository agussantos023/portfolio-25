import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProjectC } from './card-project-c';

describe('CardProjectC', () => {
  let component: CardProjectC;
  let fixture: ComponentFixture<CardProjectC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardProjectC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardProjectC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
