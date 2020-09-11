import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsstComponent } from './msst.component';

describe('MsstComponent', () => {
  let component: MsstComponent;
  let fixture: ComponentFixture<MsstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
