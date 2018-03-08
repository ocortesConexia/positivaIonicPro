import { Injectable } from '@angular/core'

@Injectable()
export class DocumentService {
  private _documentTypes: Object[] = [
    {
      name: 'Cédula de ciudadanía',
      value: 'CC'
    },
    {
      name: 'Tarjeta de identidad',
      value: 'TI'
    },
    {
      name: 'Registro civil',
      value: 'RC'
    }
  ]

  constructor () {}

  getDocumentTypes () {
    return this._documentTypes
  }
}
