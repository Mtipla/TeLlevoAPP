import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signInWithCredential, GoogleAuthProvider } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthcorreoService {

  constructor(private afAuth: AngularFireAuth) { }

  // Registrar usuario con email y contraseña
  registerUser(email: string, password: string) {
    return from(this.afAuth.createUserWithEmailAndPassword(email, password));
  }

  // Iniciar sesión con email y contraseña
  loginUser(email: string, password: string) {
    return from(this.afAuth.signInWithEmailAndPassword(email, password));
  }


  // Cerrar sesión
  logoutUser() {
    return from(this.afAuth.signOut());
  }

  // Obtener el estado de autenticación del usuario
  getUser() {
    return this.afAuth.authState;
  }

  // Recuperar contraseña (enviar correo de recuperación)
  resetPassword(email: string) {
    return from(this.afAuth.sendPasswordResetEmail(email)).pipe();
  }

}
