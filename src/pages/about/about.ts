import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }
// Funcion para mostrar informacion sobre funcionalidades de carro y favoritos
  MostrarInfo() {
    let alert = this.alertCtrl.create({
      title: 'Funcionalidad No disponible',
      subTitle: 'Funcionalidad no solicitada en la prueba tecnica, proximamente se encontraran disponible',
      buttons: ['Entendido']
    });
    alert.present();
  } 
}
