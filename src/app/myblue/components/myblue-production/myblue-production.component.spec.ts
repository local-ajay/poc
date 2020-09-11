import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBlueProductionComponent } from './myblue-production.component';

describe('MyblueProductionComponent', () => {
  let component: MyBlueProductionComponent;
  let fixture: ComponentFixture<MyBlueProductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBlueProductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBlueProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
