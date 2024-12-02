import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import * as mapbox from 'mapbox-gl';
import { HttpClient } from '@angular/common/http';
import { CrudfirebaseService, Viajes } from 'src/app/servicio/crudfirebase.service';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mapa-pasajero',
  templateUrl: './mapa-pasajero.page.html',
  styleUrls: ['./mapa-pasajero.page.scss'],
})
export class MapaPasajeroPage implements OnInit {

  constructor(private http: HttpClient,private navCtrl:NavController, private CrudServ: CrudfirebaseService) { }

  ngOnInit() { this.viaje_mod=JSON.parse(localStorage.getItem("viaje_mod")?? '')
  }

  viaje_mod: Viajes = { id: '', partida: '', destino: '', capacidad_vehiculo: 0, precio: 0, lat_destino: 0, lng_destino: 0, lugar_encuentro: '' }
  map: mapbox.Map;
  lat_final = -33.59844271829733
  lng_final = -70.57882462583581
  lat_dest = parseFloat(localStorage.getItem("lat_direccion") ?? '0')
  lng_dest = parseFloat(localStorage.getItem("lng_direccion") ?? '0')

  ionViewWillEnter() {
    this.mapa();
  }

  mapa() {
    this.map = new mapbox.Map({
      accessToken : environment.MAPBOX_ACCESS_TOKEN,
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.lng_final,this.lat_final],
      zoom: 15
    });
    new mapbox.Marker({ color: 'red' }).setLngLat([this.lng_final,this.lat_final]).addTo(this.map)
    
    this.direccionSeleccionada();
  }

  direccionSeleccionada(){
    let longitud=this.lng_dest
    let latitud=this.lat_dest

    new mapbox.Marker({color:'green'}).setLngLat([longitud,latitud]).addTo(this.map)
    var ruta_mapa=`https://api.mapbox.com/directions/v5/mapbox/driving/-70.57882462583581,-33.59844271829733;${longitud},${latitud}?geometries=geojson&access_token=pk.eyJ1IjoibXRpYXAiLCJhIjoiY20yczQydWE2MWtsazJxcHh0MGg3dTNkbyJ9.SOwyrnYNafnujJzj0DQeqA`
   
    this.http.get(ruta_mapa).subscribe((data:any)=>{
      console.log(data.routes[0].geometry)

      this.map.addSource('route',{
        type: 'geojson',
        data:{
          type: 'Feature',
          geometry:data.routes[0].geometry,
          properties:{}
        }
      });

      this.map.addLayer({
        id:'route',
        type:'line',
        source:'route',
        layout:{
          "line-cap":'square',
          "line-join": 'round'
        },
        paint:{
          "line-color":'blue',
          "line-width":5
        }
      })


    })
  }

  unirse(){
    this.viaje_mod.capacidad_vehiculo=this.viaje_mod.capacidad_vehiculo-1
    this.modificar()
    this.map.remove()
    this.navCtrl.navigateForward(['/home-pasajero'])
  }

  modificar(){
    this.CrudServ.modificarViaje(this.viaje_mod.id,this.viaje_mod).then(()=>{

    }).catch((err)=>{

    })

  }
}
