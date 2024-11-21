import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CrudfirebaseService, Viajes } from 'src/app/servicio/crudfirebase.service';

@Component({
  selector: 'app-viajar-pasajero',
  templateUrl: './viajar-pasajero.page.html',
  styleUrls: ['./viajar-pasajero.page.scss'],
})
export class ViajarPasajeroPage implements OnInit {

  constructor(private CrudServ: CrudfirebaseService, private navCtrl:NavController) { }

  lista_viajes: Viajes[] = []
  m_viaje: Viajes = { id: '', partida: '', destino: '', capacidad_vehiculo: 0, precio: 0, lat_destino: 0, lng_destino: 0, lugar_encuentro: '' }

  ngOnInit() {
    this.listar()
  }

  listar() {
    this.CrudServ.listarViaje().subscribe(data => {
      this.lista_viajes = data
    })
  }

  mostrarMapa(via: Viajes){
      this.m_viaje = via
      localStorage.setItem("lat_direccion",`${via.lat_destino}` );
      localStorage.setItem("lng_direccion",`${via.lng_destino}` );
      this.navCtrl.navigateForward(['/mapa-pasajero'])
  }
}
