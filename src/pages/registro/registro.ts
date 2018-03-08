import  { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home'
import {DocumentService} from "../../services/document.service";
import { UserService, User } from '../../services/user.service'

@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html'
})
export class RegistroPage {

  documentTypes: Object[]
  user: User = {} as User

  constructor(
    private $navCtrl: NavController,
    $documentService: DocumentService,
    private $userService: UserService,
    private $toastCtrl: ToastController) {
    this.documentTypes = $documentService.getDocumentTypes()
  }

  registrar() {
    this.$userService.signUp(this.user)
      .then(result => {
        return this.$toastCtrl.create({
          message: 'Usuario registrado correctamente.',
          duration: 3000
        })
        .present()
      })
      .then(() => {
        this.$navCtrl.push(HomePage)
      })
      .catch(console.log)
  }
}
