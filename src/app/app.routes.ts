import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProductosComponent } from './productos/productos.component';
import { PedidosComponent } from './pedidos/pedidos.component';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent,
      },
      {
        path: 'main',
        component: MainComponent,
      },
    
      {
        path: 'clientes',
        component: ClientesComponent,
      }, 
      {
        path: 'productos',
        component: ProductosComponent,
      },
      {
        path: 'pedidos',
        component: PedidosComponent,
      },
]

