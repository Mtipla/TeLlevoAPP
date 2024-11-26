import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/servicio/authentication.service';

@Component({
  selector: 'app-home-pasajero',
  templateUrl: './home-pasajero.page.html',
  styleUrls: ['./home-pasajero.page.scss'],
})
export class HomePasajeroPage implements OnInit {

  correo:string=""

  constructor(private authService:AuthenticationService , private menuCtrl: MenuController) { }

  ngOnInit() {
    this.correo=localStorage.getItem("correo")?? ''
  }

  cerrar(){
    this.authService.logout()
  }

  openSecondMenu() {
    this.menuCtrl.open('second-menu');
  }
}
