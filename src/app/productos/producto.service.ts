import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Producto } from "./producto";
import { Observable, catchError, map,tap, throwError } from 'rxjs';


const URL = "https://6684679456e7503d1ae03109.mockapi.io/api/v1/products";

@Injectable({  
    providedIn: 'root'
  })
  
  
  export class ProductoService{

    constructor(private http: HttpClient, private router: Router) { }


    public getProductos(): Observable<Producto[]> { //map transforma, tap solo utiliza la info y la usa para algo.
        return this.http.get<Producto[]>(URL);
    }

    public getProducto(id: Number): Observable<Producto> {
      return this.http.get<Producto>(URL + `/${id}`).pipe(
        catchError(e => {
          console.error(e.error.mensaje);
          if(e.satus != 401 && e.error.mensaje){
            this.router.navigate(['/clientes']);
            console.error(e.error.mensaje);
          }
          return throwError(()=> e);
        })
      );
    }
    public create(producto: Producto): Observable<Producto> {
        return this.http.post(URL, producto).pipe(
          map((response: any) => response.producto as Producto),
          catchError( e => {
            if(e.status = 400) { 
              return throwError(()=> e);
            }
            if(e.error.mensaje){
              console.error(e.error.mensaje);
            }
            return throwError(()=> e);
          }
          )
        )
      }

}