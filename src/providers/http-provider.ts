import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class HttpProvider {
    constructor(public http: Http){
    }

    //Obtem dados ultimo
    obterUltimo(){
        return this.http.get('https://nunofcguerreiro.com/api-euromillions-json').map(res => res.json());
        console.log(this.http.get('https://nunofcguerreiro.com/api-euromillions-json').map(res => res.json()));
    }
    obterMes(){
        var data = new Date();
        var mes = data.getMonth();
        var ano = data.getFullYear();
        var url = 'https://nunofcguerreiro.com/api-euromillions?result=' + ano + '-' + mes;
        return this.http.get(url).map(res => res.json());
    }
    
}
