import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http-provider'

@Component({
  selector: 'page-mes',
  templateUrl: 'mes.html',
  providers:[HttpProvider]
})
export class MesPage {
	loading: any;
	novoMes: any;
  	constructor(public navCtrl: NavController, private httpProvider: HttpProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController) {

  		this.loading = this.loadingCtrl.create({
  			content: `
  			<ion-spinner></ion-spinner>`		
  		});

  		this.obterDadosMes();
  	}

  	// Obter Mês dados
  	obterDadosMes(){
  		this.loading.present();
  		this.httpProvider.obterMes().subscribe(
  			ultimo => {
  				this.novoMes = ultimo;
  			},
  			err => {
  				console.error("Erro: " + err);

  			},
  			() => {
  				this.loading.dismiss();
  				console.log("Informações obtidas com sucesso");
  			});
  	}

    doRefresh(refresher){
      this.httpProvider.obterMes().subscribe(
        ultimo => {
          this.novoMes = ultimo;
      })

      setTimeout(() => {
        this.httpProvider.obterMes().subscribe(
          ultimo => {
            this.novoMes = ultimo;
            refresher.complete();
          })
      }, 2000);
    }

}
