import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Cliente } from "./cliente";
import { Observable, catchError, map,tap, throwError } from 'rxjs';
import { HttpClient } from "@angular/common/http";


const URL = "https://api.escuelajs.co/api/v1/users";

@Injectable({  
    providedIn: 'root'
  })
  
  
  export class ClienteService{

    constructor(private http: HttpClient, private router: Router) { }


      public getClientes(): Observable<Cliente[]> { //map transforma, tap solo utiliza la info y la usa para algo.
        return this.http.get<Cliente[]>(URL);
    }

}