import { Component } from '@angular/core'
import { NavController, NavParams } from 'ionic-angular'
import { UserService } from '../../services/user.service'
import { Diabetes1Page } from '../diabetes1/diabetes1';


import { AlarmService } from '../../services/alarm.service'

@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
})
export class ListaPage {
  public user
  public alarms

  constructor(
    navParams: NavParams,
    public $navCtrl: NavController,
    public $user: UserService,
    public $alarm: AlarmService) {
    this.user = navParams.get('user')
    this.alarms = $alarm.alarms

    /*
    const date = new Date()

    $user.db.collection('users').doc(this.user.id)
      .collection('alarms')
      .get()
      .then(docs => {
        docs.forEach(doc => {
          const alarm = doc.data()

          if (alarm.type === 'medicine') {
            alarm.medicines = alarm.medicines.map(medicine => {
              const [hours, minutes] = medicine.from.split(':')
              const offset = Math.abs(hours - date.getHours()) % medicine.interval

              medicine.date = new Date()
              medicine.date.setHours(medicine.date.getHours() + offset)

              return medicine
            })
          }

          this.alarms.push(alarm)
        })

        console.log(this.alarms)
      })
      */
  }

  registerAlarms () {
    this.$navCtrl.push(Diabetes1Page)
  }
}
