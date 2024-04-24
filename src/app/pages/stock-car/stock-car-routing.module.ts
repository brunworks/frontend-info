import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockCarComponent } from './stock-car.component';


const routes: Routes = [
  { path: '', component:  StockCarComponent},
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockCarRoutingModule { }