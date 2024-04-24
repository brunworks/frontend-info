import { Component, OnInit } from '@angular/core';
import { VeiculosService } from './../../services/veiculos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  veiculos: any[] = [];

  constructor(private veiculosService: VeiculosService) { }

  ngOnInit(): void {
    this.veiculosService.listarVeiculos().subscribe(data => {
      console.log(data)
      this.veiculos = data;
    });

  }

  // Método para atualizar a lista de veículos com os filtrados
  onVeiculosFiltered(filteredVeiculos: any[]): void {
     this.veiculos = filteredVeiculos;
  }

}

