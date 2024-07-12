import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Cliente } from "./cliente";
import { Observable, catchError, map,tap, throwError } from 'rxjs';
import { HttpClient } from "@angular/common/http";


const URL = "https://6684679456e7503d1ae03109.mockapi.io/api/v1/clients";

@Injectable({  
    providedIn: 'root'
  })
  
  
  export class ClienteService{

    constructor(private http: HttpClient, private router: Router) { }


      public getClientes(): Observable<Cliente[]> { //map transforma, tap solo utiliza la info y la usa para algo.
        return this.http.get<Cliente[]>(URL);
    }

    public getCliente(id: Number): Observable<Cliente> {
      return this.http.get<Cliente>(URL + `/${id}`).pipe(
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

    public create(cliente: Cliente): Observable<Cliente> {
      return this.http.post(URL, cliente).pipe(
        map((response: any) => response.cliente as Cliente),
        catchError( e => {
          if(e.status = 400) { //este no pasa por el iterceptor de auth porque maneja la validacion del formulario.
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