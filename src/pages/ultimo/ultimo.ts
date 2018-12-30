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
        this.resultadoEuromilhoes = []
        this.getEuromilhoes()
        this.getTotoloto()
        this.getMilhao()
    }
    getEuromilhoes() {
        this.resultadoEuromilhoes.push(this.httpProvider.dadosEuromilhoes())
        console.log(this.resultadoEuromilhoes)
    }

    getTotoloto(){
        this.resultadoEuromilhoes.push(this.httpProvider.dadosTotoloto())
        console.log(this.resultadoEuromilhoes)
    }

    getMilhao() {
        this.resultadoEuromilhoes.push(this.httpProvider.dadosMilhao())
        console.log(this.resultadoEuromilhoes)
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

