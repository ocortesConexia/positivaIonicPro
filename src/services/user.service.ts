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
  // db = (window as any).firebase.firestore()

  constructor () {}

  get authenticated () {
    //return JSON.parse(localStorage.getItem('user'))
    return {
      id: 'ho1nGy5GDwcdsRLxWRhH',
      data: {
        age: 19,
        document_number: '212897289',
        document_type: 'CC',
        first_name: 'Gissel Loreint',
        last_name: 'Diaz Betancourth'
      }
    }
  }

  signUp(user: User): Promise<any> {
    // return this.db.collection('users').add(user)
    return Promise.resolve(this.authenticated)
  }

  authenticate(user: any): Promise<any> {
    return Promise.resolve(this.authenticated)
/*
    return this.db.collection('users')
      .where('document_type', '==', user.document_type)
      .where('document_number', '==', user.document_number.toString())
      .get()
      .then(querySnapshot => {
        let doc
        const docs = querySnapshot.docs

        if (docs.length) {
          doc = {
            id: docs[0].id,
            data: docs[0].data()
          }

          localStorage.setItem('user', JSON.stringify(doc))
        }

        return doc
      })*/
  }
}
