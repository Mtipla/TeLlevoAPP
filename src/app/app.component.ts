import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AuthenticationService } from './servicio/authentication.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private router:Router,
    private authenService:AuthenticationService,
    private platform:Platform
  ) {
    this.iniciarAPP()

  }
  iniciarAPP(){
    this.platform.ready().then(()=>{
      this.authenService.authState.subscribe(state=>{
        if (state) {
          this.router.navigate(['/home'])
        }else{
          this.router.navigate(['/splash'])
          this.router.navigate(['/login'])
        }
      })
    })
  }



}
