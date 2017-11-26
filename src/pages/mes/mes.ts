import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http-provider'

@Component({
  selector: 'page-mes',
  templateUrl: 'mes.html',
  providers:[HttpProvider]
})
export class MesPage {
	loading: any;
	novoMes: any;
  	constructor(public navCtrl: NavController, private httpProvider: HttpProvider, public loadingCtrl: LoadingController) {

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
  				this.novoMes = ultimo.drawns;
  			},
  			err => {
  				console.error("Erro: " + err);

  			},
  			() => {
  				this.loading.dismiss();
  				console.log("Informações obtidas com sucesso");
  			});
  	}


}
