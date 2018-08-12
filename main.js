(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <app-header></app-header>\r\n    <app-news-list></app-news-list>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_header_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/navbar/navbar.component */ "./src/app/components/header/navbar/navbar.component.ts");
/* harmony import */ var _components_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/news-list/news-list.component */ "./src/app/components/news-list/news-list.component.ts");
/* harmony import */ var _components_news_list_news_item_news_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/news-list/news-item/news-item.component */ "./src/app/components/news-list/news-item/news-item.component.ts");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/news.service */ "./src/app/services/news.service.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_10__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _components_header_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _components_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_6__["NewsListComponent"],
                _components_news_list_news_item_news_item_component__WEBPACK_IMPORTED_MODULE_7__["NewsItemComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"]
            ],
            providers: [_services_news_service__WEBPACK_IMPORTED_MODULE_8__["NewsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-brand {\r\n    letter-spacing: 4px;\r\n    font-family: 'Roboto'\r\n}\r\n.nav-item {\r\n    font-size: 12px;\r\n}\r\n/* @media only screen and (max-width: 576px) {\r\n    .navbar-nav{\r\n        display: none !important;\r\n    }\r\n}\r\n */\r\n"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md bg-dark navbar-dark fixed-top\">\r\n    <!-- Brand -->\r\n    <a class=\"navbar-brand\" href=\"javascript:void(0)\" (click)=\"changeCategory('')\">The Times</a>\r\n\r\n    <!-- Toggler/collapsibe Button -->\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <!-- Navbar links -->\r\n    <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\r\n        <ul class=\"navbar-nav\">\r\n            <li class=\"nav-item\" *ngFor=\"let cat of categoryList\">\r\n                <a class=\"nav-link\" href=\"javascript:void(0)\" (click)=\"changeCategory(cat)\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">{{cat}}</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/news.service */ "./src/app/services/news.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(_newService) {
        this._newService = _newService;
        this.categoryList = ['General', 'Business', 'Entertainment', 'Health', 'Science', 'Sports', 'Technology'];
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.changeCategory = function (cat) {
        this._newService.changeCategory(cat);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/header/navbar/navbar.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/header/navbar/navbar.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\r\n    font-size: 13px;\r\n    margin-top: 20px;\r\n}\r\n.navborder  {\r\n    background-color: #f3f5f7;\r\n    padding: 25px 0px;\r\n    box-shadow: 0 2px 5px 0 gray;\r\n    letter-spacing: 4px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/header/navbar/navbar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/header/navbar/navbar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-light navborder\">\r\n    <div class=\"row\">\r\n        <div class=\"col-5 container\">\r\n            <nav class=\"navbar navbar-expand-sm\">\r\n                <ul class=\"navbar-nav\">\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" href=\"#\">Link 1</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" href=\"#\">Link 2</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" href=\"#\">Link 3</a>\r\n                    </li>\r\n                </ul>\r\n            </nav>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/header/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/header/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/header/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/header/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/news-list/news-item/news-item.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/news-list/news-item/news-item.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    font-family: 'Roboto';\r\n}\r\n .row {\r\n    min-height: 180px;\r\n    position: relative;\r\n}\r\n .title {\r\n    font-weight: 400;\r\n}\r\n .desc {\r\n    margin-top: 10px;\r\n    text-align: justify;\r\n    line-height: 1.4;\r\n    font-size: 12px;\r\n    font-weight: 300;\r\n}\r\n .img {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    background-size: cover;\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n}\r\n .reflink {\r\n    font-size: 10px;\r\n    position: absolute;\r\n    bottom: 0px;\r\n}\r\n .metadata {\r\n     font-size: 10px;\r\n     color: gray;\r\n     margin-top: 3px;\r\n}\r\n @media only screen and (max-width: 768px) {\r\n    .card-img {\r\n        min-height: 200px;\r\n        margin-bottom: 15px;\r\n    }\r\n}\r\n @media only screen and (min-width: 768px) {\r\n    /* .row {\r\n        min-height: 180px;\r\n        position: relative;\r\n    } */\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/news-list/news-item/news-item.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/news-list/news-item/news-item.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li class=\"list-group-item mb-3 shadow\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4 card-img\">\r\n                <div [style.backgroundImage]=\"'url('+ newsItem.urlToImage +')'\" *ngIf=\"newsItem.urlToImage; else blankimage\" class=\"img\">\r\n                </div>\r\n                <ng-template #blankimage>\r\n                    <div [style.backgroundImage]=\"'url(../../assets/images/blank.jpeg)'\" class=\"img\"></div>\r\n                </ng-template>\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n                <h6 class=\"title\">{{newsItem.title}}</h6>\r\n                <p class=\"metadata\">\r\n                    <span *ngIf=\"newsItem.author\" >by {{newsItem.author}}</span>\r\n                    <span *ngIf=\"newsItem.publishedAt\">\r\n                        <span *ngIf=\"newsItem.author\"> | </span>\r\n                        {{newsItem.publishedAt | date :'short'}}\r\n                    </span>\r\n                </p>\r\n                <p class=\"desc\">{{newsItem.description}}</p>\r\n                <br><br>\r\n                <p class=\"reflink\">\r\n                    <i>Read more at <a [href]=\"newsItem.url\" target=\"_blank\">{{newsItem.source.name}}</a></i>\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </li>\r\n"

/***/ }),

/***/ "./src/app/components/news-list/news-item/news-item.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/news-list/news-item/news-item.component.ts ***!
  \***********************************************************************/
/*! exports provided: NewsItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsItemComponent", function() { return NewsItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewsItemComponent = /** @class */ (function () {
    function NewsItemComponent() {
    }
    NewsItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NewsItemComponent.prototype, "newsItem", void 0);
    NewsItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news-item',
            template: __webpack_require__(/*! ./news-item.component.html */ "./src/app/components/news-list/news-item/news-item.component.html"),
            styles: [__webpack_require__(/*! ./news-item.component.css */ "./src/app/components/news-list/news-item/news-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewsItemComponent);
    return NewsItemComponent;
}());



/***/ }),

/***/ "./src/app/components/news-list/news-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/news-list/news-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mgtp {\r\n    margin-top: 90px;\r\n}\r\n.pg {\r\n    margin-top: 15px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/news-list/news-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/news-list/news-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"container mgtp list-group col-md-8 col-lg-6\">\r\n    <div *ngFor = \"let newsItem of newsList?.articles |\r\n                    paginate: { itemsPerPage: 7, currentPage: p, totalItems: newsList?.totalResults }\">\r\n        <app-news-item [newsItem]=\"newsItem\"></app-news-item>\r\n    </div>\r\n    <div class=\"pg\">\r\n        <pagination-controls (pageChange)=\"p = $event; getNews(cat,p,$event)\"></pagination-controls>\r\n    </div>\r\n</ul>\r\n<ngx-spinner></ngx-spinner>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/news-list/news-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/news-list/news-list.component.ts ***!
  \*************************************************************/
/*! exports provided: NewsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsListComponent", function() { return NewsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/news.service */ "./src/app/services/news.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsListComponent = /** @class */ (function () {
    function NewsListComponent(_newsService, spinner) {
        var _this = this;
        this._newsService = _newsService;
        this.spinner = spinner;
        this.p = 1; //initialize page index in pagination
        this.cat = ''; //initialize category
        _newsService.categoryChangeListener.subscribe(function (data) {
            _this.p = 1; //reset page index to 1 on category change
            _this.cat = data.category;
            _this.getNews(_this.cat, 1);
        });
    }
    NewsListComponent.prototype.ngOnInit = function () {
        this.getNews(this.cat, 1); //get news on initial page load
    };
    NewsListComponent.prototype.getNews = function (cat, page) {
        var _this = this;
        this.spinner.show();
        this._newsService.getTopHeadLines(cat, 'in', this.p).subscribe(function (newsList) {
            _this.newsList = newsList;
            _this.spinner.hide();
        }, function (err) {
            console.error(err);
            _this.spinner.hide();
        });
    };
    NewsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news-list',
            template: __webpack_require__(/*! ./news-list.component.html */ "./src/app/components/news-list/news-list.component.html"),
            styles: [__webpack_require__(/*! ./news-list.component.css */ "./src/app/components/news-list/news-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], NewsListComponent);
    return NewsListComponent;
}());



/***/ }),

/***/ "./src/app/services/news.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/news.service.ts ***!
  \******************************************/
/*! exports provided: NewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsService", function() { return NewsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsService = /** @class */ (function () {
    function NewsService(_http) {
        this._http = _http;
        this.categoryChangeListener = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NewsService.prototype.getTopHeadLines = function (category, country, page) {
        var url = "https://newsapi.org/v2/top-headlines";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'X-Api-Key': _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiKey });
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('language', 'en')
            .append('category', category)
            .append('country', country)
            .append('page', page.toString())
            .append('pageSize', "7");
        return this._http.get(url, { headers: headers, params: params });
    };
    NewsService.prototype.getCategorizedNews = function () {
        var url = "https://newsapi.org/v2/everything";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'X-Api-Key': _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiKey });
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('language', 'en');
        return this._http.get(url, { headers: headers, params: params });
    };
    NewsService.prototype.changeCategory = function (cat) {
        this.categoryChangeListener.emit({ category: cat });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NewsService.prototype, "categoryChangeListener", void 0);
    NewsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NewsService);
    return NewsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiKey: "e27c1da3c4fe4c1ca2e7486b2df6bf4a"
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\Projects\Angular\news-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map