import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  }
  
//Funcion de Alerts para la muestra del mensaje de informacion de la aplicacion
  MostrarInfo() {
    let alert = this.alertCtrl.create({
      title: 'Informaciones',
      subTitle: 'Esta aplicacion tuvo como proposito principal la implementacion de local-notifications, por problemas del android-sdk en conjunto con incompatiblidades entre librerias de Linux (LM 16.08) fue imposible probar dichas funcionalidades, por lo que quedo descartado las locaNotifications',
      buttons: ['Entendido']
    });
    alert.present();
  }  

}
