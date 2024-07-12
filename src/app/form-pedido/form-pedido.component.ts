import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../clientes/cliente';
import { ClienteService } from '../clientes/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../productos/producto.service';
import { Producto } from '../productos/producto';
import { Pedido } from '../pedidos/pedido';
import { PedidosComponent } from '../pedidos/pedidos.component';
import { PedidoService } from '../pedidos/pedido.service';

@Component({
  selector: 'app-form-pedido',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form-pedido.component.html',
  styleUrl: './form-pedido.component.css'
})


export class FormPedidoComponent {

  clientes!: Cliente[];
  productos!: Producto[];

  nuevoPedido: Pedido = new Pedido();

  constructor(private clienteService: ClienteService,
                    private  productoService: ProductoService,
                    private pedidoService: PedidoService,
                    private router: Router
  ) { }

  ngOnInit(): void {
  
    this.clienteService.getClientes().subscribe(
      response => {
        this.clientes = response as Cliente[];
      }
    );

    this.productoService.getProductos().subscribe(
      response => {
        this.productos = response as Producto[];
      }
      
    ); 
  }

 public create():void {
  this.nuevoPedido.calcularTotal();
  this.pedidoService.create(this.nuevoPedido);
  this.router.navigate(['/pedidos']);
 }

}
