import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatoComponent } from './plato.component';

describe('PlatoComponent', () => {
  let component: PlatoComponent;
  let fixture: ComponentFixture<PlatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlatoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
