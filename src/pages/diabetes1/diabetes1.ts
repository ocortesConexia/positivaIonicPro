import  { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { AlarmService } from '../../services/alarm.service';
import { ListaPage } from '../lista/lista';

@Component({
  selector: 'page-diabetes1',
  templateUrl: 'diabetes1.html'
})
export class Diabetes1Page {

  tipo: number = 1

  public alarms

  constructor(
    public navParams: NavParams,
    public $navCtrl: NavController,
    public $alarm: AlarmService) {
    this.tipo = this.navParams.get('tipo_diabetes')
    this.alarms = $alarm.alarms
  }

  addMedicine () {
    this.$alarm.addMedicine({
      name: 'Medicine',
      from: new Date(),
      interval: 8
    })
  }

  removeMedicine (medicine) {
    this.$alarm.removeMedicine(medicine)
  }

  saveAlarms () {
    this.$alarm.save()
    this.$navCtrl.push(ListaPage)
  }
}
