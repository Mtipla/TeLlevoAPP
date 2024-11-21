import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
//importar servicio
import { CrudApiDjService } from 'src/app/servicio/crud-api-dj.service';

@Component({
  selector: 'app-crud-api',
  templateUrl: './crud-api.page.html',
  styleUrls: ['./crud-api.page.scss'],
})
export class CrudApiPage implements OnInit {

  constructor(private api: CrudApiDjService) { }

  ngOnInit() {
  }

  lista:any[]=[]

  recuperar() {
    this.api.getInfo().subscribe(
        (resp) => {
        console.log(resp)
      },
        (error) => {
        console.log(error)
      })
  }

}
