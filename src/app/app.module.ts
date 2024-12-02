import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


//firebase
import { environment } from 'src/environments/environment.prod';
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

//impotar libreria de consumo api
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
//importar los servicios 
import { AuthenticationService } from './servicio/authentication.service';
import { AuthGuardService } from './servicio/auth-guard.service';
import { Storage } from '@ionic/storage';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    HttpClientModule,
    AngularFireAuthModule,
  ],
  providers: [
    AuthGuardService,
    AuthenticationService,
    Storage,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
