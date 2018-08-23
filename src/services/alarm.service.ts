import { Injectable } from '@angular/core'
//import { LocalNotifications } from '@ionic-native/local-notifications'

@Injectable()
export class AlarmService {
  alarms: any

  constructor (
   // private $notifications: LocalNotifications
  ) {
  /*  this.alarms = JSON.parse(localStorage.getItem('alarms')) || {
      control: new Date(),
      delivery: new Date(),
      medicines: [
        {
          type: '',
          from: new Date(),
          interval: 0
        }
      ]
    }*/
  }
/*
  addMedicine (medicine) {
    this.alarms.medicines.push(medicine)
  }

  removeMedicine (medicine) {
    this.alarms.medicines.splice(this.alarms.medicines.indexOf(medicine), 1)
  }

  save () {
    const offset = 0//1000 * 60 * 60 * 2

    const alarms = [
      {
        id: 1,
        title: 'Cita de control',
        text: 'Su cita es en 2 horas',
        trigger: { at: +this.alarms.control - offset }
      },
      {
        id: 2,
        title: 'Entrega de medicamentos',
        text: 'La entrega de medicamentos es en 2 horas',
        trigger: { at: +this.alarms.delivery - offset }
      }
    ]

    this.$notifications.on('trigger')
      .subscribe((...args) => {
        console.log(args)
      })

    const SKIP_INDEXES = 2

    alarms.push(
      ...this.alarms.medicines.map((medicine, index) => {
        return {
          id: SKIP_INDEXES + index,
          title: 'Toma de medicamento',
          text: `La toma de su medicamento ${medicine.type} es en 5 minutos`,
          trigger: { at: +medicine.from - offset }
        }
      })
    )

    this.$notifications.update(alarms as any)

    localStorage.setItem('alarms', JSON.stringify(this.alarms))
  }*/
}
