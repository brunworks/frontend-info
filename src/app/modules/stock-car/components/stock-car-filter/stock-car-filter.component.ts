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

  //@Output() filtered = new EventEmitter<any[]>();

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
      ano: [null]
    });
  }

  filtrarVeiculos(): void {
    const { marca, modelo, ano } = this.filterForm.value;
    this.veiculosService.listarVeiculos()
      .pipe(
        map(veiculos => veiculos.filter((veiculo: Veiculo) => {
          return (!marca || veiculo.marca.includes(marca)) &&
                 (!modelo || veiculo.modelo.includes(modelo)) &&
                 (!ano || veiculo.ano === ano);
        }))
      )
      //.subscribe(filteredVeiculos => this.filtered.emit(filteredVeiculos));
      this.filterForm.reset();
  }

  onSubmit(): void {

  }

  resetarFiltros(): void {
    this.filterForm.reset();
    // Opcional: Se você deseja voltar a um estado específico do formulário, configure aqui.
    this.emitirTodosVeiculos();
  }
  
  emitirTodosVeiculos(): void {
    this.veiculosService.listarVeiculos()
      .subscribe({
       // next: (veiculos) => this.filtered.emit(veiculos),
        error: (error) => console.error('Erro ao obter veículos:', error)
      });
  }

  // Método para lidar com a mudança de ano
  onAnoChange(result: Event ): void {
    
  }

}