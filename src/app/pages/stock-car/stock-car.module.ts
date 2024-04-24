import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeiculosService } from 'src/app/services/veiculos.service';
import { StockCarRoutingModule } from './stock-car-routing.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StockCarRoutingModule
  ],
  providers: [
    VeiculosService
  ]
})
export class StockCarModule { }
