import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment.prod';
import * as mapbox from 'mapbox-gl';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pro-v',
  templateUrl: './pro-v.page.html',
  styleUrls: ['./pro-v.page.scss'],
})
export class ProVPage implements OnInit {

  sw: boolean =true;
  sw2: boolean=false;
  map: mapbox.Map;
  lat_final = -33.59844271829733
  lng_final = -70.57882462583581

  direccion_buscar = 'https://api.mapbox.com/geocoding/v5/mapbox.places/MIDIRECCION.json?access_token=pk.eyJ1IjoibXRpYXAiLCJhIjoiY20yczQydWE2MWtsazJxcHh0MGg3dTNkbyJ9.SOwyrnYNafnujJzj0DQeqA'
  mi_direccion = ''
  arreglo_direcciones: Direcciones[] = []

  Destino=''

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  ionViewWillEnter() {
    this.mapa()
  }


  mapa() {
    this.map = new mapbox.Map({
      accessToken : environment.MAPBOX_ACCESS_TOKEN,
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [this.lng_final,this.lat_final],
      zoom: 15
    });
    new mapbox.Marker({ color: 'red' }).setLngLat([this.lng_final,this.lat_final]).addTo(this.map)
    this.sw =true;
    this.sw2=false;
  }


  buscarDireccion() {
    this.sw =false;
    this.sw2 =true;
    var texto = this.direccion_buscar.replaceAll('MIDIRECCION', this.mi_direccion)
    this.http.get(texto).subscribe((data:any) => {

      this.arreglo_direcciones=[]
      var data_direcciones = JSON.parse(JSON.stringify(data))['features']
      for (let index = 0; index < data_direcciones.length; index++) {
        const element = data_direcciones[index];
        localStorage.setItem("mi_direccion",this.mi_direccion)
        
        let dire: Direcciones = {
          place_name: element.place_name,
          lng: element.center[0],
          lat: element.center[1]
        }
        
        this.arreglo_direcciones.push(dire)
      }
    })
  }


  direccionSeleccionada(ev){
    let longitud=ev.detail.value["lng"]
    let latitud=ev.detail.value["lat"]

    new mapbox.Marker({color:'green'}).setLngLat([longitud,latitud]).addTo(this.map)
    var ruta_mapa=`https://api.mapbox.com/directions/v5/mapbox/driving/-70.57882462583581,-33.59844271829733;${longitud},${latitud}?geometries=geojson&access_token=pk.eyJ1IjoibXRpYXAiLCJhIjoiY20yczQydWE2MWtsazJxcHh0MGg3dTNkbyJ9.SOwyrnYNafnujJzj0DQeqA`
   
    this.http.get(ruta_mapa).subscribe((data:any)=>{
      console.log(data.routes[0].geometry)
      localStorage.setItem("lat_direccion",`${latitud}` );
      localStorage.setItem("lng_direccion",`${longitud}` );

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


}


export interface Direcciones {
  place_name: string;
  lat: number;
  lng: number;
}
