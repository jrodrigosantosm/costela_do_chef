export class Produto {
  public ds_nome: string;
  public ds_descricao: string;
  public ds_imagem: string;
  public nu_preco: number;
  public in_disponivel: number;

  constructor(titulo: string, descricao: string, imagem: string, preco: number) {
    this.ds_nome = titulo;
    this.ds_descricao = descricao;
    this.ds_imagem = imagem;
    this.nu_preco = preco;
    this.in_disponivel = preco;
  }
}
