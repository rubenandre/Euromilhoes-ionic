webpackJsonp([0],{

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 152:
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
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mes_mes__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ultimo_ultimo__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sobre_sobre__ = __webpack_require__(200);
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
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__ultimo_ultimo__["a" /* UltimoPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__mes_mes__["a" /* MesPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__sobre_sobre__["a" /* SobrePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\ruben\Desktop\Euromilhoes-ionic\Euromilhoes-ionic\src\pages\tabs\tabs.html"*/'<ion-tabs color="orang">\n  <ion-tab [root]="tab1Root" tabTitle="Último Resultado" tabIcon="ios-add-circle-outline"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Resultados do Mês" tabIcon="ios-archive-outline"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Sobre" tabIcon="ios-information-circle-outline"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\ruben\Desktop\Euromilhoes-ionic\Euromilhoes-ionic\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_provider__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MesPage = (function () {
    function MesPage(navCtrl, httpProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.httpProvider = httpProvider;
        this.loadingCtrl = loadingCtrl;
        this.loading = this.loadingCtrl.create({
            content: "\n  \t\t\t<ion-spinner></ion-spinner>"
        });
        this.obterDadosMes();
    }
    // Obter Mês dados
    MesPage.prototype.obterDadosMes = function () {
        var _this = this;
        this.loading.present();
        this.httpProvider.obterMes().subscribe(function (ultimo) {
            _this.novoMes = ultimo.drawns;
        }, function (err) {
            console.error("Erro: " + err);
        }, function () {
            _this.loading.dismiss();
            console.log("Informações obtidas com sucesso");
        });
    };
    MesPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.httpProvider.obterMes().subscribe(function (ultimo) {
            _this.novoMes = ultimo.drawns;
        });
        setTimeout(function () {
            _this.httpProvider.obterMes().subscribe(function (ultimo) {
                _this.novoMes = ultimo.drawns;
                refresher.complete();
            });
        }, 2000);
    };
    MesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mes',template:/*ion-inline-start:"C:\Users\ruben\Desktop\Euromilhoes-ionic\Euromilhoes-ionic\src\pages\mes\mes.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Resultados por Mês\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n    pullingIcon="arrow-dropdown"\n    pullingText="Puxe para atualizar"\n    refreshingSpinner="circles"\n    refreshingText="Atualizando...">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-card *ngFor="let ultimos of novoMes">\n    <ion-card-header>\n      <h6><b>{{ ultimos.date }}</b></h6>\n      <hr/>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-badge color="primary">{{ ultimos.numbers }}</ion-badge>\n    </ion-card-content>\n    <ion-card-content>\n      <ion-badge color="orang">{{ ultimos.stars }}</ion-badge>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"C:\Users\ruben\Desktop\Euromilhoes-ionic\Euromilhoes-ionic\src\pages\mes\mes.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_http_provider__["a" /* HttpProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_http_provider__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]])
    ], MesPage);
    return MesPage;
}());

//# sourceMappingURL=mes.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UltimoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_provider__ = __webpack_require__(99);
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
        this.loading = this.loadingCtrl.create({
            content: "\n  \t\t\t<ion-spinner></ion-spinner>"
        });
        this.obterDadosUltimo();
    }
    // Obter ultimo dados
    UltimoPage.prototype.obterDadosUltimo = function () {
        var _this = this;
        this.loading.present();
        this.httpProvider.obterUltimo().subscribe(function (ultimo) {
            _this.novoUltimo = ultimo;
        }, function (err) {
            console.error("Erro: " + err);
        }, function () {
            _this.loading.dismiss();
            console.log("Informações obtidas com sucesso");
        });
    };
    UltimoPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.httpProvider.obterUltimo().subscribe(function (ultimo) {
            _this.novoUltimo = ultimo;
        });
        setTimeout(function () {
            _this.httpProvider.obterUltimo().subscribe(function (ultimo) {
                _this.novoUltimo = ultimo;
                refresher.complete();
            });
        }, 2000);
    };
    UltimoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ultimo',template:/*ion-inline-start:"C:\Users\ruben\Desktop\Euromilhoes-ionic\Euromilhoes-ionic\src\pages\ultimo\ultimo.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Último Resultado</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  \n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n    pullingIcon="arrow-dropdown"\n    pullingText="Puxe para atualizar"\n    refreshingSpinner="circles"\n    refreshingText="Atualizando...">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-card *ngFor="let ultimo of novoUltimo">\n    <ion-card-header>\n      <h6><b>{{ ultimo.data }}</b></h6>\n      <hr/>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-badge color="primary">{{ ultimo.numeros }}</ion-badge>\n    </ion-card-content>\n    <ion-card-content>\n      <ion-badge color="orang">{{ ultimo.estrelas }}</ion-badge>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\ruben\Desktop\Euromilhoes-ionic\Euromilhoes-ionic\src\pages\ultimo\ultimo.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_http_provider__["a" /* HttpProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_http_provider__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]])
    ], UltimoPage);
    return UltimoPage;
}());

//# sourceMappingURL=ultimo.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SobrePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
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
            selector: 'page-sobre',template:/*ion-inline-start:"C:\Users\ruben\Desktop\Euromilhoes-ionic\Euromilhoes-ionic\src\pages\sobre\sobre.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Sobre\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<div id="img">\n\n		<img src="https://avatars1.githubusercontent.com/u/9402773?s=460&v=4">\n\n	</div>\n\n  <ion-content>\n\n    <ion-list>\n\n      <ion-list-header>\n\n        Sobre Aplicação\n\n      </ion-list-header>\n\n      <ion-item>Nome: Resultados Euromilhões</ion-item>\n\n      <ion-item>Versão: 1.0.0</ion-item>\n\n      <ion-item>Última Atualização: 26/11/2017</ion-item>\n\n      <ion-list-header>\n\n        Desenvolvedor\n\n      </ion-list-header>\n\n      <ion-item>Rúben Silva</ion-item>\n\n      <ion-item>\n\n        <ion-icon name="logo-github" item-start></ion-icon>\n\n        <a href="https://github.com/rubenandre">Github</a>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-content>'/*ion-inline-end:"C:\Users\ruben\Desktop\Euromilhoes-ionic\Euromilhoes-ionic\src\pages\sobre\sobre.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], SobrePage);
    return SobrePage;
}());

//# sourceMappingURL=sobre.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_provider__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_mes_mes__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_ultimo_ultimo__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_sobre_sobre__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(195);
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
                __WEBPACK_IMPORTED_MODULE_7__pages_ultimo_ultimo__["a" /* UltimoPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_mes_mes__["a" /* MesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_sobre_sobre__["a" /* SobrePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_ultimo_ultimo__["a" /* UltimoPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_mes_mes__["a" /* MesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_sobre_sobre__["a" /* SobrePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__providers_http_provider__["a" /* HttpProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(196);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\ruben\Desktop\Euromilhoes-ionic\Euromilhoes-ionic\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\ruben\Desktop\Euromilhoes-ionic\Euromilhoes-ionic\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpProvider = (function () {
    function HttpProvider(http) {
        this.http = http;
    }
    //Obtem dados ultimo
    HttpProvider.prototype.obterUltimo = function () {
        return this.http.get('https://getbridgeapp.co/api/euromilhoes/resultadoseuromilhoes?ultimo=1').map(function (res) { return res.json(); });
    };
    HttpProvider.prototype.obterMes = function () {
        var data = new Date();
        var mes = data.getMonth() + 1;
        var nmes = mes.toString();
        var ano = data.getFullYear();
        if (mes < 10) {
            nmes = '0' + mes;
        }
        var url = 'https://getbridgeapp.co/api/euromilhoes/resultadoseuromilhoes?anomes=' + ano + '-' + nmes;
        console.log(url);
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    HttpProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], HttpProvider);
    return HttpProvider;
}());

//# sourceMappingURL=http-provider.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map