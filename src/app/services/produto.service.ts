import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../models/Produto.model';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  api = environment.domain;

  constructor(private http: HttpClient) { }

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.api}/produtos`, {});
  }
}
