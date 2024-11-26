import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/servicio/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  correo:string=""
  
  constructor(private authService:AuthenticationService, private menuCtrl: MenuController) { }

  ngOnInit() { this.correo=localStorage.getItem("correo")?? ''
  }

  cerrar(){
    this.authService.logout()
  }

  openFirstMenu() {
    this.menuCtrl.open('first-menu');
  }

}
