import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductoService } from './producto.service';
import { Producto } from './producto';
import { ModalService } from './modal.service';
import { DetalleProductoComponent } from '../detalle-producto/detalle-producto.component';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [RouterLink, NgIf, NgFor, CommonModule, DetalleProductoComponent],
  templateUrl: './productos.component.html',
})
export class ProductosComponent {


  productos!: Producto[];
  productoSeleccionado!: Producto;


  constructor(private productoService: ProductoService,
    private activatedRoute: ActivatedRoute,
    public modalService: ModalService, 
  ) { }

  ngOnInit(): void {
    
    this.productoService.getProductos().subscribe(
      response => {
        this.productos = response as Producto[];
      }
      
    );

  };

  abrirModal(producto: Producto){
    this.productoSeleccionado = producto;
    this.modalService.abrirModalProductos();
  }

}
