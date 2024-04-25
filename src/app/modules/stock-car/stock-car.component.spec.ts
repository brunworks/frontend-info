import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockCarComponent } from './stock-car.component';

describe('StockCarComponent', () => {
  let component: StockCarComponent;
  let fixture: ComponentFixture<StockCarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockCarComponent]
    });
    fixture = TestBed.createComponent(StockCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
