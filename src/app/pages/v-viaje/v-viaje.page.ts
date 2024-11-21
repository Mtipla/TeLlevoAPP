import { Component, OnInit, ViewChild } from '@angular/core';
import { CrudfirebaseService, Viajes } from 'src/app/servicio/crudfirebase.service';
import { AlertController,IonModal  } from '@ionic/angular';


@Component({
  selector: 'app-v-viaje',
  templateUrl: './v-viaje.page.html',
  styleUrls: ['./v-viaje.page.scss'],
})
export class VViajePage implements OnInit {

  constructor(private CrudServ: CrudfirebaseService, private alertController: AlertController) { }

  @ViewChild(IonModal) modal: IonModal;


  async presentAlert(id: any) {
    const alert = await this.alertController.create({
      header: 'Confirmar Eliminación',
      subHeader: '¿Estás seguro de que deseas eliminar este viaje?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Eliminación cancelada');
          }
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.elimninarViaje(id);
          }
        }
      ],
    });
    await alert.present();
  }
  
  
  
  
  
  lista_viajes: Viajes[] = []
  n_viaje: Viajes = { partida: '', destino: '', capacidad_vehiculo: 0, precio: 0, lat_destino: 0, lng_destino: 0, lugar_encuentro: '' }
  m_viaje: Viajes = { id: '', partida: '', destino: '', capacidad_vehiculo: 0, precio: 0, lat_destino: 0, lng_destino: 0, lugar_encuentro: '' }
  
  sw: boolean = false //flag
  sw2: boolean = true //flag
  
  isModalOpen = false;

  ngOnInit() {
    this.listar()
  }

  listar() {
    this.CrudServ.listarViaje().subscribe(data => {
      this.lista_viajes = data
    })
  }

  elimninarViaje(id: any) {
    this.CrudServ.elimninarViaje(id).then(() => {
    }).catch((err) => {
      console.error(err);
    })
  }


  modificar(via: Viajes, isOpen: boolean) {
    this.m_viaje = via
    this.isModalOpen = isOpen;
  }

  cancelar(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  actualiza() {
    this.CrudServ.modificarViaje(this.m_viaje.id, this.m_viaje).then(() => {
      this.cancelar(false)
    }).catch((err) => {
      console.log(err)
    })
  }



  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
