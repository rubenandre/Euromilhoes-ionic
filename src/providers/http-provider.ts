import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class HttpProvider {
    constructor(public http: Http){
    }

    //Obtem dados ultimo
    obterUltimo(){
        return this.http.get('https://getbridgeapp.co/api/euromilhoes/resultadoseuromilhoes?ultimo=1').map(res => res.json());
    }
    
    obterMes(){
        var data = new Date();
        var mes = data.getMonth() + 1; 
        var nmes = mes.toString()
        var ano = data.getFullYear();
        if (mes < 10) {
            nmes = '0' + mes; 
        }
        var url = 'https://getbridgeapp.co/api/euromilhoes/resultadoseuromilhoes?anomes=' + ano + '-' + nmes;
        console.log(url);
        return this.http.get(url).map(res => res.json());
    }
    
}
