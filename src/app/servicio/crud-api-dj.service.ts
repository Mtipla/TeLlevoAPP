import { Injectable } from '@angular/core';
//librerias
import { HttpClient } from '@angular/common/http';
import { Observable,retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudApiDjService {

  constructor(private http:HttpClient) { }

  rutaApi='http://127.0.0.1:8000/api/sedes/'
  rutaApi2='https://mindicador.cl/api/dolar/'
  

  getInfo():Observable<any>{
    return this.http.get(this.rutaApi).pipe(retry(3))
  }
}
