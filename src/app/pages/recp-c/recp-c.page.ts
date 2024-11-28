import { Component, OnInit } from '@angular/core';
import { AuthcorreoService } from 'src/app/servicio/authcorreo.service';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-recp-c',
  templateUrl: './recp-c.page.html',
  styleUrls: ['./recp-c.page.scss'],
})
export class RecpCPage implements OnInit {

  constructor(private authService: AuthcorreoService, private ldnCtrl: LoadingController) { }


  correo:string = ''

  ngOnInit() {
  }

  rec_contrasena() {
    if (this.correo) {
      this.Ldng('Correo de recuperación enviado');
      this.authService.resetPassword(this.correo);
    } else {
      this.Ldng('Por favor ingresa tu correo electrónico');
    }
  }

  async Ldng(msg:string) {
    const loading = await this.ldnCtrl.create({
      message: msg,
      duration: 3000,
    });

    loading.present();
  }

}
