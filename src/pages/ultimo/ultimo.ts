import {Component} from '@angular/core';
import {NavController, LoadingController} from 'ionic-angular';
import {HttpProvider} from '../../providers/http-provider'

@Component({
    selector: 'page-ultimo',
    templateUrl: 'ultimo.html',
    providers: [HttpProvider]
})

export class UltimoPage {
    loading: any;
    resultadoEuromilhoes: Array<object> = []

    constructor(public navCtrl: NavController, private httpProvider: HttpProvider, public loadingCtrl: LoadingController) {

        this.loading = this.loadingCtrl.create({
            content: `<ion-spinner></ion-spinner>`

        });

        this.getDadosTodos()
    }

    getDadosTodos() {
        this.loading.present();
        this.resultadoEuromilhoes = []
        setTimeout(() => {
            this.getEuromilhoes()
        }, 1000);

        setTimeout(() => {
            this.getTotoloto()
        }, 1000);

        setTimeout(() => {
            this.getMilhao()
        }, 1000);
        this.loading.dismiss();
    }
    getEuromilhoes() {
        this.resultadoEuromilhoes.push(this.httpProvider.dadosEuromilhoes())
    }

    getTotoloto(){
        this.resultadoEuromilhoes.push(this.httpProvider.dadosTotoloto())
    }

    getMilhao() {
        this.resultadoEuromilhoes.push(this.httpProvider.dadosMilhao())
    }

    // Refresher


    doRefresh(refresher) {
        this.getDadosTodos()

        setTimeout(() => {
            this.getDadosTodos();
            refresher.complete();
        }, 2000);
    }
}

