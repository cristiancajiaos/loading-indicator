import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerContainer } from './spinner-container';

describe('SpinnerContainer', () => {
  let component: SpinnerContainer;
  let fixture: ComponentFixture<SpinnerContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpinnerContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(SpinnerContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
