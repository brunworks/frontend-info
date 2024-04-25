import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StockCarFilterComponent } from './stock-car-filter.component';


describe('StockCarFilterComponent', () => {
  let component: StockCarFilterComponent;
  let fixture: ComponentFixture<StockCarFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockCarFilterComponent]
    });
    fixture = TestBed.createComponent(StockCarFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
