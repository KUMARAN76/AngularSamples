import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HTMLLearningComponent } from './htmllearning.component';

describe('HTMLLearningComponent', () => {
  let component: HTMLLearningComponent;
  let fixture: ComponentFixture<HTMLLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HTMLLearningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HTMLLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
