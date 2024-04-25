import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', 
    loadChildren: () => import('./modules/home/home.module')
    .then(m => m.HomeModule) },
  { 
    path: 'stock-car', 
    loadChildren: () => import('./modules/stock-car/stock-car.module')
    .then(m => m.StockCarModule) 
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

