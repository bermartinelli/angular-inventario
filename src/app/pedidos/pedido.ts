import { Producto } from "../productos/producto";

export class Pedido{
    id!: number;
    cliente!: string;
    total!: number;
    productos: Producto[] = [];
   

    public calcularTotal(): number{
        this.total =0;
        this.productos.forEach((producto: Producto) => {  this.total += producto.precio})
        return this.total;
    }

}