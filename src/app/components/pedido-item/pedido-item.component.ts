import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/Produto.model';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-pedido-item',
  templateUrl: './pedido-item.component.html',
  styleUrls: ['./pedido-item.component.scss']
})
export class PedidoItemComponent implements OnInit {
  public produtos: Produto[] = [];  // Correção: array de Produto

  constructor(
    private produtoService: ProdutoService
  ) { }

  ngOnInit(): void {
    this.getProdutos();
  }

  banner = "assets/image/banner-teste.jpg";

  adicionarCarrinho(produto: Produto) {  // Correção: Produto ao invés de object
    console.log('adicionado', produto);
  }

  getProdutos() {
    this.produtoService.getProdutos().subscribe({
      next: (response: Produto[]) => {  // Correção: respose -> response e tipo de resposta Produto[]
        this.produtos = response;
        console.log(response);
      }
    });
  }
}
