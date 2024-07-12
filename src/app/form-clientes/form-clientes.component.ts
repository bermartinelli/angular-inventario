import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../clientes/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../clientes/cliente';

@Component({
  selector: 'app-form-clientes',
  standalone: true,
  imports: [FormClientesComponent, FormsModule, CommonModule],
  templateUrl: './form-clientes.component.html',
  styleUrl: './form-clientes.component.css'
})
export class FormClientesComponent {

  public errores: string[] = [];

  constructor(private clienteService: ClienteService, private router:Router, private activatedRoute: ActivatedRoute){}

  public cliente: Cliente = new Cliente()
  public titulo:String = "Clientes"
  

  ngOnInit(): void {
   this.cargarCliente();
  }

  //asignarle a la variable cliente el cliente con id x si es que existe. 
  cargarCliente(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.clienteService.getCliente(id).subscribe (cliente => this.cliente = cliente)
      }
    })
  }

  public create():void {
    
    this.clienteService.create(this.cliente).subscribe({
      next: (cliente) => {
        this.router.navigate(['/clientes']);
      },
      error: (err) => {
        this.errores = err.error.errors as string[];
        console.error('Código del error desde el backend: ' + err.status);
        console.error(err.error.errors);
      }
    });
  }


}
