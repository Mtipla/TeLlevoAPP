import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/servicio/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  usuario:string=""
  
  constructor(private authService:AuthenticationService, private menuCtrl: MenuController) { }

  ngOnInit() {
  }

  cerrar(){
    this.authService.logout()
  }

  openFirstMenu() {
    this.menuCtrl.open('first-menu');
  }

}
