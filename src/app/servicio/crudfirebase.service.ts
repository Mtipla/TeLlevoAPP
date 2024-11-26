import { Injectable } from '@angular/core';
import { Observable, Timestamp } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { when } from 'cypress/types/jquery';



@Injectable({
  providedIn: 'root'
})
export class CrudfirebaseService {

  constructor(private firestore:AngularFirestore) { }

  
  /*) Cosas de Practica (*/
  crearEstu(estudiante:Estudiante){
    return this.firestore.collection('estudiante').add(estudiante)
  }
  listarEstu():Observable<Estudiante[]> {
    return this.firestore.collection<Estudiante>('estudiante').valueChanges({idField:'id'})
  }
  elimninar(id:any){
    return this.firestore.collection('estudiante').doc(id).delete()
  }
  modificar(id:any,estudiante:Estudiante){
    return this.firestore.collection('estudiante').doc(id).update(estudiante)
  }
  
  /*) Cosas de viajes (*/
  crearViaje(viaje:Viajes){
    return this.firestore.collection('viaje').add(viaje)
  }
  listarViaje():Observable<Viajes[]> {
    return this.firestore.collection<Viajes>('viaje').valueChanges({idField:'id'})
  }
  elimninarViaje(id:any){
    return this.firestore.collection('viaje').doc(id).delete()
  }
  modificarViaje(id:any,viaje:Viajes){
    return this.firestore.collection('viaje').doc(id).update(viaje)
  }
  
}

export interface Estudiante{
  id?:string;
  nombre:string;
  edad:number;
  auto:boolean;
}

export interface Viajes{
  id?:string;
  partida:string;
  destino:string;
  capacidad_vehiculo:number;
  precio:number;
  lat_destino:number;
  lng_destino:number;
  lugar_encuentro:string;
}
