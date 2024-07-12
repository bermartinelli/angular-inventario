import { Component, Input } from '@angular/core';
import { Producto } from '../productos/producto';
import { ModalService } from '../productos/modal.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductoService } from '../productos/producto.service';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-detalle-producto',
  standalone: true,
  imports: [CommonModule, NgIf, RouterLink],
  templateUrl: './detalle-producto.component.html',
  styleUrl: './detalle-producto.component.css'
})
export class DetalleProductoComponent {

  @Input() producto! :Producto;

  constructor(private productoService: ProductoService,
    private activatedRoute: ActivatedRoute,
    public modalService: ModalService,
    ) {
}

cerrarModal(){
  this.modalService.cerrarModalProductos();

}
}
