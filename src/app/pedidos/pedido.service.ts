import { Injectable } from "@angular/core";
import { Pedido } from "./pedido";
import { BehaviorSubject, Observable } from "rxjs";


@Injectable({  
    providedIn: 'root'
  })
  
export class PedidoService{

    private pedidosSubject: BehaviorSubject<Pedido[]> = new BehaviorSubject<Pedido[]>([]);
    private pedidos: Pedido[] = [];

    constructor() { }

   

    public getPedidos(): Observable<Pedido[]> {
        return this.pedidosSubject.asObservable();
      }

      public create(pedido: Pedido): void {
        pedido.id = this.pedidos.length + 1;
        this.pedidos.push(pedido);
        this.pedidosSubject.next(this.pedidos); 
      }

}