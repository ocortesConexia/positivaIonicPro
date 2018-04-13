import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RegistroPage} from  '../registro/registro';
import { DocumentService } from "../../services/document.service";
import { UserService } from "../../services/user.service"

import { ListaPage } from "../lista/lista"

interface User {
  document_type: string
  document_number: string
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  documentTypes: Object[]

  user: User = {
    document_type: 'CC',
    document_number: '212897289'
  }

  constructor(
    public navCtrl: NavController,
    $documentService: DocumentService,
    private $userService: UserService) {
    this.documentTypes = $documentService.getDocumentTypes()
  }

  goToRegister() {
    this.navCtrl.push(RegistroPage)
  }

  login(user: User) {
    this.$userService.authenticate(user)
      .then(userInfo => {
        if (userInfo) {
          this.navCtrl.push(ListaPage, { user: userInfo })
        }
      })
  }
}
