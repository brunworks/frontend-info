import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {
  private baseUrl = 'http://localhost:3000/veiculos'; // URL para o endpoint do backend

  constructor(private http: HttpClient) { }

  listarVeiculos(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
