import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBlueComponent } from './myblue.component';

describe('MyblueComponent', () => {
  let component: MyBlueComponent;
  let fixture: ComponentFixture<MyBlueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBlueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
