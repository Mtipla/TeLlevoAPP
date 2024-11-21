import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { CrudfirebaseService, Viajes } from 'src/app/servicio/crudfirebase.service';

@Component({
  selector: 'app-pro-d',
  templateUrl: './pro-d.page.html',
  styleUrls: ['./pro-d.page.scss'],
})
export class ProDPage implements OnInit {

  constructor(private CrudServ: CrudfirebaseService,private navCtrl: NavController,) { }

  mi_direccion:string = ''
  n_viaje: Viajes = { partida: 'Duoc Uc sede Puente Alto', destino:localStorage.getItem("mi_direccion")?? '' , capacidad_vehiculo: 0, precio: 0, lat_destino: parseFloat(localStorage.getItem("lat_direccion") ?? '0'), lng_destino: parseFloat(localStorage.getItem("lng_direccion") ?? '0') ,lugar_encuentro: '' }

  ngOnInit() {
      this.mi_direccion=localStorage.getItem("mi_direccion")?? ''
   }


  guardar() {
    this.CrudServ.crearViaje(this.n_viaje).then(() => {
      this.navCtrl.navigateForward('/home')
    }).catch((err) => {
      console.log("Error")
    })
  }
}
