import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Platform,AlertController  } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth'; // Importar AngularFireAuth


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authState= new BehaviorSubject(false)

  constructor(
    private router:Router,
    private storage:Storage,
    private platform:Platform,
    private alertController: AlertController,
    private afAuth: AngularFireAuth
  ) {
    this.platform.ready().then(()=>{
      this.storage.create()
      this.storage.get('USER').then((response)=>{
        if(response){
          this.authState.next(true)
        }
      })
    })
  }

  login(usuario: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(usuario, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          this.storage.set('USER', { email: user.email }).then(() => {
            this.authState.next(true);
            this.router.navigate(['/splash']); // Redirigir a la página después del login exitoso
          });
        }
      })
      .catch((error) => {
        this.showAlert('El usuario/contraseña es incorrecta. Inténtalo de nuevo.');
        this.router.navigate(['/login']); // Volver al login en caso de error
      });
  }
  

  logout(){
    this.afAuth.signOut().then(() => {
      this.showAlert('Se a cerrado la sesion');
      this.authState.next(false);
      this.storage.remove('USER');
      this.router.navigate(['/login']);
    });
  }

  //retorna el valor del atributo de autentificacion
  isAuthenticated(){
    return this.authState.value;
  }


  async showAlert(header: string) {
    const alert = await this.alertController.create({
      header: header,
      buttons: ['OK'],
    });
    await alert.present();
  }

}
