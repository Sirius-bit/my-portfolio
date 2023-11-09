import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceMeComponent } from './experience-me.component';

describe('ExperienceMeComponent', () => {
  let component: ExperienceMeComponent;
  let fixture: ComponentFixture<ExperienceMeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExperienceMeComponent]
    });
    fixture = TestBed.createComponent(ExperienceMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
