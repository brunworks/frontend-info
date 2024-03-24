import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculosFilterComponent } from './veiculos-filter.component';

describe('VeiculosFilterComponent', () => {
  let component: VeiculosFilterComponent;
  let fixture: ComponentFixture<VeiculosFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeiculosFilterComponent]
    });
    fixture = TestBed.createComponent(VeiculosFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
