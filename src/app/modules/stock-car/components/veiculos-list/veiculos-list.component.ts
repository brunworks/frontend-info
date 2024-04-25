import { ChangeDetectorRef, Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-veiculos-list',
  templateUrl: './veiculos-list.component.html',
  styleUrls: ['./veiculos-list.component.scss']
})
export class VeiculosListComponent implements OnInit{
  @Input() veiculos: any[] = [];

  pageIndex: number = 1;
  pageSize: number = 5;
  total: number = 0;
  currentPageData: any[] = [];

  constructor(private cdr: ChangeDetectorRef){
  }

  ngOnInit():void {  
    debugger
    console.log(this.veiculos)
    this.total = this.veiculos.length
    this.updateCurrentPageData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    debugger
    if (changes['veiculos']) {
      this.updateList();
    }
  }

  updateList(): void {
    if (this.veiculos) {
      this.total = this.veiculos.length;
      this.updateCurrentPageData();
    }
  }

  updateCurrentPageData(): void {
    this.currentPageData = this.veiculos.slice((this.pageIndex - 1) * this.pageSize, this.pageIndex * this.pageSize);
    this.cdr.markForCheck();
  }

  onPageChange(event: number): void {
    this.pageIndex = event;
    this.updateCurrentPageData();
  }

  
}
