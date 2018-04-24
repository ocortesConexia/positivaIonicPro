import { Injectable } from '@angular/core'
import { LocalNotifications } from '@ionic-native/local-notifications'

@Injectable()
export class AlarmService {
  alarms: any

  constructor (
    private $notifications: LocalNotifications) {
    this.alarms = JSON.parse(localStorage.getItem('alarms')) || {
      control: new Date(),
      delivery: new Date(),
      medicines: [
        {
          type: '',
          from: new Date(),
          interval: 0
        }
      ]
    }
  }

  addMedicine (medicine) {
    this.alarms.medicines.push(medicine)
  }

  removeMedicine (medicine) {
    this.alarms.medicines.splice(this.alarms.medicines.indexOf(medicine), 1)
  }

  save () {
    this.$notifications.schedule([
      {
        title: 'Cita de control',
        text: 'Su cita es en 1 minuto, apúrese',
        trigger: { at: new Date(+new Date() + 3600) }
      },
      {
        title: 'Entrega de medicamentos',
        text: 'La entrega de medicamentos es en (no sé)',
        trigger: { at: new Date(+new Date() + 4800) }
      }
    ])

    localStorage.setItem('alarms', JSON.stringify(this.alarms))
  }
}
