import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsstProductionComponent } from './msst-production.component';

describe('MsstProductionComponent', () => {
  let component: MsstProductionComponent;
  let fixture: ComponentFixture<MsstProductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsstProductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsstProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
