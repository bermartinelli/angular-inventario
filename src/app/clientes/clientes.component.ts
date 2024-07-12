import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [RouterLink, NgIf, NgFor, CommonModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {

  clientes!: Cliente[];

  constructor(private clienteService: ClienteService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    
    this.clienteService.getClientes().subscribe(
      response => {
        this.clientes = response as Cliente[];
      }
      
    );

  };
}
