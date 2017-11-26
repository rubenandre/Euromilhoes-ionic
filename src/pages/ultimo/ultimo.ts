import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http-provider'

@Component({
  selector: 'page-ultimo',
  templateUrl: 'ultimo.html',
  providers:[HttpProvider]
})

export class UltimoPage {
	loading: any;
	novoUltimo: any;
  	constructor(public navCtrl: NavController, private httpProvider: HttpProvider, public loadingCtrl: LoadingController) {

  		this.loading = this.loadingCtrl.create({
  			content: `
  			<ion-spinner></ion-spinner>`		
  		});

  		this.obterDadosUltimo();
  	}

  	// Obter ultimo dados
  	obterDadosUltimo(){
  		this.loading.present();
  		this.httpProvider.obterUltimo().subscribe(
  			ultimo => {
  				this.novoUltimo = ultimo.drawns;
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
      this.httpProvider.obterUltimo().subscribe(
        ultimo => {
          this.novoUltimo = ultimo.drawns;
      })

      setTimeout(() => {
        this.httpProvider.obterUltimo().subscribe(
          ultimo => {
            this.novoUltimo = ultimo.drawns;
            refresher.complete();
          })
      }, 2000);
    }
}

