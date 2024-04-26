import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map } from 'rxjs';
;
import { Veiculo } from 'src/app/models/veiculo.model';

import { NzI18nService, pt_BR } from 'ng-zorro-antd/i18n';
import { NzDateMode } from 'ng-zorro-antd/date-picker';
import { VeiculosService } from 'src/app/services/veiculos.service';

@Component({
  selector: 'app-stock-car-filter',
  templateUrl: './stock-car-filter.component.html',
  styleUrls: ['./stock-car-filter.component.scss']
})
export class StockCarFilterComponent implements OnInit {
  filterForm!: FormGroup;
  anos: number[] = [2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012];

  @Output() filtered = new EventEmitter<any[]>();

  constructor(
    private fb: FormBuilder, 
    private veiculosService: VeiculosService, 
    private i18n: NzI18nService) { 
        this.i18n.setLocale(pt_BR);
  }

  ngOnInit(): void {
    this.filterForm = this.fb.group({
      marca: [''],
      modelo: [''],
      chassi: [''],
      ano: ['']
    });
  }

  filtrarVeiculos(): void {
    debugger
    const filtro = this.filterForm.value;
    this.veiculosService.listarVeiculos().pipe(
      map(veiculos => veiculos.filter((veiculo:any) =>
        (filtro.marca === '' || veiculo.marca.toLowerCase().includes(filtro.marca.toLowerCase())) &&
        (filtro.modelo === '' || veiculo.modelo.toLowerCase().includes(filtro.modelo.toLowerCase())) &&
        (filtro.chassi === '' || veiculo.chassi.toLowerCase().includes(filtro.chassi.toLowerCase())) &&
        (filtro.ano === null || veiculo.ano.toString().includes(filtro.ano.toString()))
      ))
    ).subscribe(filteredVeiculos => {
      this.filtered.emit(filteredVeiculos);
    });

    //this.filterForm.reset();
   
  }

  onSubmit(): void {

  }

  limparFiltros(): void {
    debugger
    this.filterForm.reset();
    this.veiculosService.listarVeiculos().subscribe(veiculos => {
      this.filtered.emit(veiculos);
    });
  }



  // Método para lidar com a mudança de ano
  onAnoChange(result: Event ): void {
    
  }
  

}