import  { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-diabetes1',
  templateUrl: 'diabetes1.html'
})
export class Diabetes1Page {

  tipo: number = 1
  medicines = [
    { name: 'Insulina', from: new Date(), interval: 8 }
  ]

  constructor(public navParams: NavParams) {
    this.tipo = this.navParams.get('tipo_diabetes')
  }

  addMedicine () {
    this.medicines.push({
      name: 'Medicine',
      from: new Date(),
      interval: 8
    })
  }

  removeMedicine (medicine) {
    this.medicines.splice(this.medicines.indexOf(medicine), 1)
  }
}
