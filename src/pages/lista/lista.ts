import { Component } from '@angular/core'
import { NavController, NavParams } from 'ionic-angular'
import { UserService } from '../../services/user.service'

@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
})
export class ListaPage {
  public user
  public alarms = []

  constructor(
    navParams: NavParams,
    public $user: UserService) {
    this.user = navParams.get('user')

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
  }
}
