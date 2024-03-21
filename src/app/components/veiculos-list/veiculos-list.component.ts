import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-veiculos-list',
  templateUrl: './veiculos-list.component.html',
  styleUrls: ['./veiculos-list.component.scss']
})
export class VeiculosListComponent implements OnInit{
  @Input() veiculos: any[] = [];

  ngOnInit():void {
    console.log(this.veiculos);
  }
}
