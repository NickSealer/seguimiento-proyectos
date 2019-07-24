import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstelarComponent } from './estelar.component';

describe('EstelarComponent', () => {
  let component: EstelarComponent;
  let fixture: ComponentFixture<EstelarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstelarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstelarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
