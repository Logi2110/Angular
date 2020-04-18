import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompDatabindComponent } from './comp-databind.component';

describe('CompDatabindComponent', () => {
  let component: CompDatabindComponent;
  let fixture: ComponentFixture<CompDatabindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompDatabindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompDatabindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
