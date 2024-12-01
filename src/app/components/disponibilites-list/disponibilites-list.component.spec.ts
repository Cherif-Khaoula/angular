import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisponibilitesListComponent } from './disponibilites-list.component';

describe('DisponibilitesListComponent', () => {
  let component: DisponibilitesListComponent;
  let fixture: ComponentFixture<DisponibilitesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisponibilitesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisponibilitesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
