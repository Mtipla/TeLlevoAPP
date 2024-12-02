import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/servicio/authentication.service';
import { AuthcorreoService } from 'src/app/servicio/authcorreo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private alertC: AlertController,
    private authService: AuthenticationService,
    private authcorreo: AuthcorreoService
  ) { }

  correo: string = '';
  password: string = '';

  ngOnInit() {
  
  }

  // Función para iniciar sesión
  login() {
    this.authcorreo.loginUser(this.correo, this.password).subscribe(
      (res) => {
        console.log('Login exitoso:', res);
        setTimeout(() => {
          console.log('Redirigiendo a /home');
          this.navCtrl.navigateRoot('/splash');
          localStorage.setItem('correo',this.correo)
        }, 500);
      },
      (err) => {
        console.error('Error en inicio de sesión:', err);
        this.showAlert('Usuario/contraseña incorrectos.');
      }
    );
  }
  loginPasajero() {
    this.authcorreo.loginUser(this.correo, this.password).subscribe(
      (res) => {
        console.log('Login exitoso:', res);
        setTimeout(() => {
          console.log('Redirigiendo a /home');
          this.navCtrl.navigateRoot('/home-pasajero');
          localStorage.setItem('correo',this.correo)
        }, 500);
      },
      (err) => {
        console.error('Error en inicio de sesión:', err);
        this.showAlert('Usuario/contraseña incorrectos.');
      }
    );
  }

  // Función para registrarse
  register() {
    this.authcorreo.registerUser(this.correo, this.password).subscribe(
      (res) => {
        console.log('Usuario registrado:', res);
        this.navCtrl.navigateRoot('/home'); // Redirigir al usuario a la página principal
      },
      (err) => {
        console.error('Error en registro:', err);
        this.showAlert('Error al registrar el usuario.');
      }
    );
  }

 

  // Función para mostrar alertas
  async showAlert(message: string) {
    const alert = await this.alertC.create({
      header: 'Error',
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }

}
