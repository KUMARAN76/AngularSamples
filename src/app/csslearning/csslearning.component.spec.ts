import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsslearningComponent } from './csslearning.component';

describe('CsslearningComponent', () => {
  let component: CsslearningComponent;
  let fixture: ComponentFixture<CsslearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsslearningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsslearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
