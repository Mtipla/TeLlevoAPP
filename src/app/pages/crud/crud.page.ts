import { Component, OnInit } from '@angular/core';

import { CrudfirebaseService, Estudiante } from 'src/app/servicio/crudfirebase.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.page.html',
  styleUrls: ['./crud.page.scss'],
})
export class CrudPage implements OnInit {

  constructor(private CrudServ: CrudfirebaseService) { }

  n_estu: Estudiante = { nombre: '', edad: 0, auto: false }
  lista_estu: Estudiante[]=[]
  m_estu: Estudiante = {id:'', nombre: '', edad: 0, auto: false }
  sw:boolean =false //flag
  sw2:boolean =true //flag

  ngOnInit() {
    this.listar()
  }

  guardar() {
    this.CrudServ.crearEstu(this.n_estu).then(() => {
      alert("lo grabe")
    }).catch((err) => {
      console.log("Error")
    })
  }

  listar(){
    this.CrudServ.listarEstu().subscribe(data=>{
      this.lista_estu=data
    })
  }

  eliminar(id:any){
      this.CrudServ.elimninar(id).then(()=>{
        alert("Eliminado")
      }).catch((err)=>{
        console.log(err)
      })
  }

  modificar(estu:Estudiante){
    this.m_estu=estu
    this.sw=true
    this.sw2=false
  }

  cancelar(){
    this.sw=false
    this.sw2=true
  }

  actualiza(){
    this.CrudServ.modificar(this.m_estu.id, this.m_estu).then (()=>{
      alert("Modificar"); 
      this.cancelar();
    }).catch((err)=>{
      console.log(err)
    })
  }
}
