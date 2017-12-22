import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
//  variable: number = this.pickUpTime
  lista: Array<any> = [
        {
            titulo: "Kratinina",
            hora: "4",
        }
    ]

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public storage: Storage) {
  }
  // El recordador segun la tarea asignada recordara unicamente cada 4 horas despues de la hora de inicio de la primera toma
  // Funcion para seleccionar el medicamento (Nombre y hora de inicio desde que se tomara)
  Seleccionar() {
      let recordador = this.alertCtrl.create({
      title: 'Agregar medicamento',
      message: 'Recuerda colocar el nombre del medicamento y la hora en la que la tomaste por primera vez (kratox te recordara la hora que te toca la pastilla en lapsos de 4 horas)',
      inputs: [
        {
          name: 'Medicina',
          placeholder: 'Medicina'
        },
        {
            name: 'HoraInicio',
            placeholder: 'HoraInicio'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: dato => {
            console.log('Cancel clicked');
            this.storage.clear();
          }
        },
        {
          text: 'Seleccionar',
          handler: dato => {
            console.log(dato);
          this.storage.set('Medicamento',dato );
        
          }
        }
      ]
    });
    recordador.present();
  }

  Recordarme(){
      
    var hora_actual = new Date().getHours();
    this.storage.get('Medicamento').then((dato) => {
        var hora_inicial = dato.HoraInicio;
        hora_inicial = +hora_inicial;
        var proxima_hora = hora_inicial + 4;
        console.log(proxima_hora);
        if (proxima_hora > 23){
            var resta = proxima_hora - 24;
            proxima_hora = resta;
        }
        while (hora_actual > proxima_hora) {
            proxima_hora = proxima_hora + 4;
            if (proxima_hora > 23){
                resta = proxima_hora - 24;
                proxima_hora = resta;
                break;
            }
        }
        let recordador = this.alertCtrl.create({
              title: 'Agregar medicamento',
              message: 'la proxima toma del medicamente es a las: ' + proxima_hora + ' (Horario /24)',
              buttons: ['Estoy al tanto']
        });
        recordador.present();
    });
    
  }
  Agregar(){
      this.storage.get('Medicamento').then((dato) => {
          this.storage.set('horario', dato.HoraInicio);
          //console.log(dato.HoraInicio);
          this.lista.pop();
          this.lista.push({
              titulo: dato.Medicina,
              hora: "4",
          });
      });
  }
}
