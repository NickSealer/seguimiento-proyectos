import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolcimComponent } from './holcim.component';

describe('HolcimComponent', () => {
  let component: HolcimComponent;
  let fixture: ComponentFixture<HolcimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolcimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolcimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
