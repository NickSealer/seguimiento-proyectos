import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KikesComponent } from './kikes.component';

describe('KikesComponent', () => {
  let component: KikesComponent;
  let fixture: ComponentFixture<KikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
