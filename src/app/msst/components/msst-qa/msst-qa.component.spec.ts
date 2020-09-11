import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsstQaComponent } from './msst-qa.component';

describe('MsstQaComponent', () => {
  let component: MsstQaComponent;
  let fixture: ComponentFixture<MsstQaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsstQaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsstQaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
