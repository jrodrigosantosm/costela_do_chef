import { Component } from '@angular/core';

@Component({
  selector: 'app-pedido-item',
  templateUrl: './pedido-item.component.html',
  styleUrls: ['./pedido-item.component.scss']
})
export class PedidoItemComponent {
  banner = "assets/image/banner-teste.jpg"
  produtos = [
    {
      titulo: 'Produto 1',
      descricao: 'Este é o primeiro produto com texto descritivo.',
      imagem: 'assets/image/produto-teste.jpg',
      preco: '9.99'
    },
    {
      titulo: 'Produto 2',
      descricao: 'Este é o segundo produto com texto descritivo.',
      imagem: 'assets/image/produto-teste.jpg',
      preco: '9.99'

    },
    {
      titulo: 'Produto 3',
      descricao: 'Este é o terceiro produto com texto descritivo.',
      imagem: 'assets/image/produto-teste.jpg',
      preco: '9.99'
    }
  ];
}
