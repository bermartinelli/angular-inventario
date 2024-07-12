import { Component } from '@angular/core';
import { PedidoService } from './pedido.service';
import { NgFor, NgIf } from '@angular/common';
import { Pedido } from './pedido';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './pedidos.component.html',
  
})
export class PedidosComponent {

  pedidos!: Pedido[];


  constructor(private pedidoService: PedidoService ) { }

  ngOnInit(): void {
    this.pedidoService.getPedidos().subscribe(
      response => {
        this.pedidos = response as Pedido[];
      }
    );
  }

}
