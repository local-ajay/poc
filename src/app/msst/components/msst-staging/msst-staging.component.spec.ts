import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsstStagingComponent } from './msst-staging.component';

describe('MsstStagingComponent', () => {
  let component: MsstStagingComponent;
  let fixture: ComponentFixture<MsstStagingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsstStagingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsstStagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
