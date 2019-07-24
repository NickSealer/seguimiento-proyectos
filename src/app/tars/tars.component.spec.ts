import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarsComponent } from './tars.component';

describe('TarsComponent', () => {
  let component: TarsComponent;
  let fixture: ComponentFixture<TarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
