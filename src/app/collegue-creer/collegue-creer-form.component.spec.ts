import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegueCreerFormComponent } from './collegue-creer-form.component';

describe('CollegueCreerComponent', () => {
  let component: CollegueCreerFormComponent;
  let fixture: ComponentFixture<CollegueCreerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollegueCreerFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegueCreerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
