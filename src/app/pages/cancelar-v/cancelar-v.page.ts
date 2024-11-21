import { Component, OnInit } from '@angular/core';
import { Viajes } from 'src/app/model/Viajes';

@Component({
  selector: 'app-cancelar-v',
  templateUrl: './cancelar-v.page.html',
  styleUrls: ['./cancelar-v.page.scss'],
})
export class CancelarVPage implements OnInit {

  arreglo: Viajes[]

  constructor() { }

  ngOnInit() {
    this.arreglo = JSON.parse(localStorage.getItem("viajes") ?? '')
  }
  isActionSheetOpen = false;
  public actionSheetButtons = [
    {
      text: 'Si',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'No',
      data: {
        action: 'share',
      },
    },
    
  ];
  setOpen(isOpen: boolean) {
    this.isActionSheetOpen = isOpen;
  }
}
