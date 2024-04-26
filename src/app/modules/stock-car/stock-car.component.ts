import { Component } from '@angular/core';
import { VeiculosService } from 'src/app/services/veiculos.service';

@Component({
  selector: 'app-stock-car',
  templateUrl: './stock-car.component.html',
  styleUrls: ['./stock-car.component.scss'],
  
})
export class StockCarComponent {

  veiculos: any[] = [];
  
  constructor(private veiculosService: VeiculosService) { }

  ngOnInit(): void {

    this.carregarVeiculos();

    console.log(this.veiculos)
  }

  onFiltered(veiculosFiltrados: any[]): void {
    this.veiculos = veiculosFiltrados;
  }

  carregarVeiculos(): void {
    this.veiculosService.listarVeiculos().subscribe(data => {
      this.veiculos = data;
    });
  }

}
