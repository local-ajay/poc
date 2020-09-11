import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBlueQAComponent } from './myblue-qa.component';

describe('MyblueQaComponent', () => {
  let component: MyBlueQAComponent;
  let fixture: ComponentFixture<MyBlueQAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBlueQAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBlueQAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
