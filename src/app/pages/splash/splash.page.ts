import { Component, OnInit, ElementRef, ViewChildren, ViewChild } from '@angular/core';
import { NavController,AnimationController, IonCard } from '@ionic/angular';

import type { QueryList } from '@angular/core';
import type { Animation } from '@ionic/angular';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  @ViewChild(IonCard, { read: ElementRef }) card: ElementRef<HTMLIonCardElement>;

  private animation: Animation;

  constructor(private navC: NavController, private animationCtrl: AnimationController) { }

  

  ngOnInit() {
    setTimeout(()=>{
      this.navC.navigateForward(['/home'])
    },2900)
  }
  
  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(2500)
      .fromTo('transform', 'translateX(-100px)', 'translateX(0px)')
      .fromTo('opacity', '0.1', '1');

    
      this.animation.play();
  }
}
