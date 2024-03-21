import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculosListComponent } from './veiculos-list.component';

describe('VeiculosListComponent', () => {
  let component: VeiculosListComponent;
  let fixture: ComponentFixture<VeiculosListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeiculosListComponent]
    });
    fixture = TestBed.createComponent(VeiculosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
