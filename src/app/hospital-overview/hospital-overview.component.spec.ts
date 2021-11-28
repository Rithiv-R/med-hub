import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalOverviewComponent } from './hospital-overview.component';

describe('HospitalOverviewComponent', () => {
  let component: HospitalOverviewComponent;
  let fixture: ComponentFixture<HospitalOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
