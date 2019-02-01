import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaintFormComponent } from './compaint-form.component';

describe('CompaintFormComponent', () => {
  let component: CompaintFormComponent;
  let fixture: ComponentFixture<CompaintFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaintFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaintFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
