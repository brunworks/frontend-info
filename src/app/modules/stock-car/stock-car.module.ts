import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeiculosService } from 'src/app/services/veiculos.service';
import { StockCarRoutingModule } from './stock-car-routing.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { StockCarFilterComponent } from './components/stock-car-filter/stock-car-filter.component';
import { VeiculosListComponent } from './components/veiculos-list/veiculos-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StockCarComponent } from './stock-car.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    StockCarComponent,
    StockCarFilterComponent,
    VeiculosListComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    NzTableModule,
    NzPaginationModule,
    NzDatePickerModule,
    MatFormFieldModule,
    
    StockCarRoutingModule,

  ],
  exports: [
    StockCarComponent,
    StockCarFilterComponent,
    VeiculosListComponent
  ],
  providers: [
    VeiculosService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StockCarModule { }
