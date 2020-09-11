import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBlueStagingComponent } from './myblue-staging.component';

describe('MyblueStagingComponent', () => {
  let component: MyBlueStagingComponent;
  let fixture: ComponentFixture<MyBlueStagingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBlueStagingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBlueStagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
