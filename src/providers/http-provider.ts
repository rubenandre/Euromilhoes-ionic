import { Injectable } from "@angular/core";
import * as scrap from 'scrap'

@Injectable()
export class HttpProvider {

    /**
     * Grava em localStorage uma json correspondente aos dados obtidos
     * @param jogo - Nome do jogo (local)
     * @param date - Data do sorteio (server)
     * @param numeros - Array com os numeros (server)
     * @param key - Nome da key para setar no localStorage
     * @param estrelas - Array com as estrelas (server)
     */
    gravarEmLocalStorate = (jogo, date, numeros, key, estrelas = '') => {
        localStorage.removeItem(key)
        localStorage.setItem(key, JSON.stringify({jogo, date, numeros,estrelas}))
    }

    /**
     * Obtem os dados referentes ao ultimo sorteio do euromilhoes
     */

    dadosEuromilhoes() {
        const URL_EUROMILHOES = 'https://www.jogossantacasa.pt/web/SCCartazResult/euroMilhoes';
        const jogo = 'Euromilhões'

        scrap(URL_EUROMILHOES, (erro, cheerio) => {

            let chave = cheerio('.regPad').first().text().trim().split('\n')[0].split('+')
            let date = cheerio('.dataInfo').first().text().split('\n')[1].split('-')[1].trim()
            let numeros = chave[0].trim().split(' ')
            let estrelas = chave[1].trim().split(' ')
            this.gravarEmLocalStorate(jogo, date, numeros, jogo, estrelas)
        })
        return JSON.parse(localStorage.getItem(jogo))
    }

    /**
     * Obtem os dados referentes ao ultimo sorteio do totoloto
     */

    dadosTotoloto() {
        const URL_TOTOLOTO = 'https://www.jogossantacasa.pt/web/SCCartazResult/totolotoNew';
        const jogo = 'Totoloto'
        scrap(URL_TOTOLOTO, (erro, cheerio) => {

            let chave = cheerio('.regPad').first().text().trim().split('\n')[0].split('+')
            let dataTemp = cheerio('.dataInfo').first().text()
            let date = dataTemp.substring(dataTemp.length - 10, dataTemp.length)
            let numeros = chave[0].trim().split(' ')
            let estrelas = chave[1].trim().split(' ')
            this.gravarEmLocalStorate(jogo, date, numeros, jogo, estrelas)
        })
        return JSON.parse(localStorage.getItem(jogo))
    }

    /**
     * Obtem os dados referentes ao ultimo sorteio do Milhao
     */

    dadosMilhao() {
        const URL_MILHAO = 'https://www.jogossantacasa.pt/web/SCCartazResult/m1lhao';
        const jogo = 'Milhão'
        scrap(URL_MILHAO, (erro, cheerio) => {
            let numeros = [cheerio('#code_m1').first().text()]
            let date = cheerio('.dataInfo').first().text().split('\n')[1].split('-')[1].trim()
            this.gravarEmLocalStorate(jogo, date, numeros, jogo)
        })
        return JSON.parse(localStorage.getItem(jogo))
    }
}
