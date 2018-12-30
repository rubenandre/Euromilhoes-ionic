webpackJsonp([0],{

/***/ 262:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 262;

/***/ }),

/***/ 303:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 303;

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ultimo_ultimo__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sobre_sobre__ = __webpack_require__(465);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__ultimo_ultimo__["a" /* UltimoPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__sobre_sobre__["a" /* SobrePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\Projetos\Euromilhoes-ionic\src\pages\tabs\tabs.html"*/'<ion-tabs color="orang">\n\n  <ion-tab [root]="tab1Root" tabTitle="Último Resultado" tabIcon="ios-add-circle-outline"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Resultados do Mês" tabIcon="ios-archive-outline"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Sobre" tabIcon="ios-information-circle-outline"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"E:\Projetos\Euromilhoes-ionic\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UltimoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_provider__ = __webpack_require__(349);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UltimoPage = (function () {
    function UltimoPage(navCtrl, httpProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.httpProvider = httpProvider;
        this.loadingCtrl = loadingCtrl;
        this.resultadoEuromilhoes = [];
        this.loading = this.loadingCtrl.create({
            content: "\n  \t\t\t<ion-spinner></ion-spinner>"
        });
        this.getDadosTodos();
    }
    UltimoPage.prototype.getDadosTodos = function () {
        this.resultadoEuromilhoes = [];
        this.getEuromilhoes();
        this.getTotoloto();
        this.getMilhao();
    };
    UltimoPage.prototype.getEuromilhoes = function () {
        this.resultadoEuromilhoes.push(this.httpProvider.dadosEuromilhoes());
        console.log(this.resultadoEuromilhoes);
    };
    UltimoPage.prototype.getTotoloto = function () {
        this.resultadoEuromilhoes.push(this.httpProvider.dadosTotoloto());
        console.log(this.resultadoEuromilhoes);
    };
    UltimoPage.prototype.getMilhao = function () {
        this.resultadoEuromilhoes.push(this.httpProvider.dadosMilhao());
        console.log(this.resultadoEuromilhoes);
    };
    // Refresher
    UltimoPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.getDadosTodos();
        setTimeout(function () {
            _this.getDadosTodos();
            refresher.complete();
        }, 2000);
    };
    UltimoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ultimo',template:/*ion-inline-start:"E:\Projetos\Euromilhoes-ionic\src\pages\ultimo\ultimo.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Último Resultado</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Puxe para atualizar"\n\n                               refreshingSpinner="circles"\n\n                               refreshingText="Atualizando...">\n\n        </ion-refresher-content>\n\n    </ion-refresher>\n\n\n\n    <ion-card *ngFor="let ultimo of resultadoEuromilhoes">\n\n        <ion-card-header>\n\n            <h6><b>{{ ultimo.jogo }} - {{ ultimo.date }}</b></h6>\n\n            <hr/>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n            <ion-badge color="primary">{{ ultimo.numeros.join(\' \') }}</ion-badge>\n\n        </ion-card-content>\n\n        <ion-card-content *ngIf="ultimo.estrelas">\n\n            <ion-badge color="orang">{{ ultimo.estrelas.join(\' \') }}</ion-badge>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"E:\Projetos\Euromilhoes-ionic\src\pages\ultimo\ultimo.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_http_provider__["a" /* HttpProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_http_provider__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]])
    ], UltimoPage);
    return UltimoPage;
}());

//# sourceMappingURL=ultimo.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrap__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_scrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_scrap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HttpProvider = (function () {
    function HttpProvider() {
        /**
         * Grava em localStorage uma json correspondente aos dados obtidos
         * @param jogo - Nome do jogo (local)
         * @param date - Data do sorteio (server)
         * @param numeros - Array com os numeros (server)
         * @param key - Nome da key para setar no localStorage
         * @param estrelas - Array com as estrelas (server)
         */
        this.gravarEmLocalStorate = function (jogo, date, numeros, key, estrelas) {
            if (estrelas === void 0) { estrelas = ''; }
            localStorage.removeItem(key);
            localStorage.setItem(key, JSON.stringify({ jogo: jogo, date: date, numeros: numeros, estrelas: estrelas }));
        };
    }
    /**
     * Obtem os dados referentes ao ultimo sorteio do euromilhoes
     */
    HttpProvider.prototype.dadosEuromilhoes = function () {
        var _this = this;
        var URL_EUROMILHOES = 'https://www.jogossantacasa.pt/web/SCCartazResult/euroMilhoes';
        var jogo = 'Euromilhoes';
        __WEBPACK_IMPORTED_MODULE_1_scrap__(URL_EUROMILHOES, function (erro, cheerio) {
            var chave = cheerio('.regPad').first().text().trim().split('\n')[0].split('+');
            var date = cheerio('.dataInfo').first().text().split('\n')[1].split('-')[1].trim();
            var numeros = chave[0].trim().split(' ');
            var estrelas = chave[1].trim().split(' ');
            _this.gravarEmLocalStorate(jogo, date, numeros, jogo, estrelas);
        });
        return JSON.parse(localStorage.getItem(jogo));
    };
    /**
     * Obtem os dados referentes ao ultimo sorteio do totoloto
     */
    HttpProvider.prototype.dadosTotoloto = function () {
        var _this = this;
        var URL_TOTOLOTO = 'https://www.jogossantacasa.pt/web/SCCartazResult/totolotoNew';
        var jogo = 'Totoloto';
        __WEBPACK_IMPORTED_MODULE_1_scrap__(URL_TOTOLOTO, function (erro, cheerio) {
            var chave = cheerio('.regPad').first().text().trim().split('\n')[0].split('+');
            var dataTemp = cheerio('.dataInfo').first().text();
            var date = dataTemp.substring(dataTemp.length - 10, dataTemp.length);
            var numeros = chave[0].trim().split(' ');
            var estrelas = chave[1].trim().split(' ');
            _this.gravarEmLocalStorate(jogo, date, numeros, jogo, estrelas);
        });
        return JSON.parse(localStorage.getItem(jogo));
    };
    /**
     * Obtem os dados referentes ao ultimo sorteio do Milhao
     */
    HttpProvider.prototype.dadosMilhao = function () {
        var _this = this;
        var URL_MILHAO = 'https://www.jogossantacasa.pt/web/SCCartazResult/m1lhao';
        var jogo = 'Milhao';
        __WEBPACK_IMPORTED_MODULE_1_scrap__(URL_MILHAO, function (erro, cheerio) {
            var numeros = [cheerio('#code_m1').first().text()];
            var date = cheerio('.dataInfo').first().text().split('\n')[1].split('-')[1].trim();
            _this.gravarEmLocalStorate(jogo, date, numeros, jogo);
        });
        return JSON.parse(localStorage.getItem(jogo));
    };
    HttpProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], HttpProvider);
    return HttpProvider;
}());

//# sourceMappingURL=http-provider.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SobrePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SobrePage = (function () {
    function SobrePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SobrePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sobre',template:/*ion-inline-start:"E:\Projetos\Euromilhoes-ionic\src\pages\sobre\sobre.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Sobre\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<div id="img">\n\n		<img src="https://avatars1.githubusercontent.com/u/9402773?s=460&v=4">\n\n	</div>\n\n  <ion-content>\n\n    <ion-list>\n\n      <ion-list-header>\n\n        Sobre Aplicação\n\n      </ion-list-header>\n\n      <ion-item>Nome: Resultados Euromilhões</ion-item>\n\n      <ion-item>Versão: 1.0.0</ion-item>\n\n      <ion-item>Última Atualização: 26/11/2017</ion-item>\n\n      <ion-list-header>\n\n        Desenvolvedor\n\n      </ion-list-header>\n\n      <ion-item>Rúben Silva</ion-item>\n\n      <ion-item>\n\n        <ion-icon name="logo-github" item-start></ion-icon>\n\n        <a href="https://github.com/rubenandre">Github</a>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-content>'/*ion-inline-end:"E:\Projetos\Euromilhoes-ionic\src\pages\sobre\sobre.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], SobrePage);
    return SobrePage;
}());

//# sourceMappingURL=sobre.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(490);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(923);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_provider__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_ultimo_ultimo__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_sobre_sobre__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_ultimo_ultimo__["a" /* UltimoPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_sobre_sobre__["a" /* SobrePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_ultimo_ultimo__["a" /* UltimoPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_sobre_sobre__["a" /* SobrePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__providers_http_provider__["a" /* HttpProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(347);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\Projetos\Euromilhoes-ionic\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"E:\Projetos\Euromilhoes-ionic\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 557:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 590:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 591:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 660:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 758:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[466]);
//# sourceMappingURL=main.js.map