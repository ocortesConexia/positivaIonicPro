import { Injectable } from '@angular/core'

@Injectable()
export class AlarmService {
  alarms: any

  constructor () {
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
    localStorage.setItem('alarms', JSON.stringify(this.alarms))
  }
}
