import  { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-diabetes1',
  templateUrl: 'diabetes1.html'
})
export class Diabetes1Page {

  tipo: number = 1

  constructor(public navParams: NavParams) {
    this.tipo = this.navParams.get('tipo_diabetes')
  }



}
