import { Injectable } from '@angular/core'

export interface User {
  first_name: string
  last_name: string
  age: number
  document_type: string
  document_number: number
}

@Injectable()
export class UserService {
  db = (window as any).firebase.firestore()

  constructor () {}

  signUp(user: User): Promise<any> {
    return this.db.collection('users').add(user)
  }

  authenticate(user: any): Promise<any> {
    console.log(user)

    return this.db.collection('users')
      .where('document_type', '==', user.document_type)
      .where('document_number', '==', user.document_number.toString())
      .get()
      .then(querySnapshot => {
        console.log(querySnapshot)
      })
  }
}
