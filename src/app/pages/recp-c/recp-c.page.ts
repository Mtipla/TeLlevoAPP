import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recp-c',
  templateUrl: './recp-c.page.html',
  styleUrls: ['./recp-c.page.scss'],
})
export class RecpCPage implements OnInit {

  constructor() { }

  sw2: boolean = false 
  sw: boolean = true 

  ngOnInit() {
  }

  codigo() {
    setTimeout(()=>{
      this.sw = false
      this.sw2 = true 
    },2900)

  }

}
