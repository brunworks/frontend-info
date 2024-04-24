import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { pt_BR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VeiculosListComponent } from './components/veiculos-list/veiculos-list.component';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { HomeComponent } from './pages/home/home.component';
import { StockCarComponent } from './pages/stock-car/stock-car.component';

registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VeiculosListComponent,
    StockCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzTableModule,
    NzPaginationModule
    
  ],
  providers: [
    { provide: NZ_I18N, useValue: pt_BR },
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
