import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map } from 'rxjs';

import { VeiculosService } from '../../services/veiculos.service';
import { Veiculo } from 'src/app/models/veiculo.model';

import { NzI18nService, pt_BR } from 'ng-zorro-antd/i18n';
import { NzDateMode } from 'ng-zorro-antd/date-picker';

@Component({
  selector: 'app-veiculos-filter',
  templateUrl: './veiculos-filter.component.html',
  styleUrls: ['./veiculos-filter.component.scss']
})
export class VeiculosFilterComponent implements OnInit {
  filterForm!: FormGroup;

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
      .subscribe(filteredVeiculos => this.filtered.emit(filteredVeiculos));
      this.filterForm.reset();
  }

  resetarFiltros(): void {
    this.filterForm.reset();
    // Opcional: Se você deseja voltar a um estado específico do formulário, configure aqui.
    this.emitirTodosVeiculos();
  }
  
  emitirTodosVeiculos(): void {
    this.veiculosService.listarVeiculos()
      .subscribe({
        next: (veiculos) => this.filtered.emit(veiculos),
        error: (error) => console.error('Erro ao obter veículos:', error)
      });
  }

  // Método para lidar com a mudança de ano
  onAnoChange(result: Event ): void {
    
  }

}