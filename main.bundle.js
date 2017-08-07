webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<app-url></app-url>\n<hr>\n\n<div class=\"container\">\n    <div class=\"card\">\n        <app-settings></app-settings>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_url_url_component__ = __webpack_require__("../../../../../src/app/components/url/url.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_settings_settings_component__ = __webpack_require__("../../../../../src/app/components/settings/settings.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import material components










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_url_url_component__["a" /* UrlComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_settings_settings_component__["a" /* SettingsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MdSliderModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MdSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MdChipsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MdProgressSpinnerModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row top-bottom-padding\" style=\"margin-left: -1px;margin-right: -1px;\"> <!--Global Play Pause Stop Bar -->\n  <div class=\"row\" style=\"margin-left: -1px;margin-right: -1px;\">\n    <div class=\"col-md-4 push-2 rounded-left rounded-right border-gray-without-padding\">\n      <a href=\"#\" class=\"btn\"><i class=\"fa fa-play\" aria-hidden=\"true\"></i></a>\n    </div>\n\n    <div class=\"col-md-4 push-4 rounded-left rounded-right border-gray-without-padding\">\n      <a href=\"#\" class=\"btn\"><i class=\"fa fa-pause\" aria-hidden=\"true\"></i></a>\n    </div>\n\n    <div class=\"col-md-4 push-6 rounded-left rounded-right border-gray-without-padding\">\n      <a href=\"#\" class=\"btn\"><i class=\"fa fa-stop\" aria-hidden=\"true\"></i></a>\n    </div>\n  </div>\n\n  <div class=\"col-md-1 rounded-left rounded-right push-8 border-gray\">\n    <md-slide-toggle (change)=\"sidenav.toggle(); changeSideNav()\" [checked]=\"sideNavOpen\"><i class=\"fa fa-cogs\" aria-hidden=\"true\"></i></md-slide-toggle>\n  </div>\n\n</div>\n\n\n\n<md-sidenav-container  style=\"height:65vh\" (backdropClick)=\"changeSideNav()\">\n  <md-sidenav #sidenav align=\"end\" class=\"\" style=\"padding-right:5px\" opened=\"false\">\n    <ul class=\"list-group\" style=\"margin:10%\">\n      <li class=\"list-group-item\"><h5>Settings</h5></li>\n      <li class=\"list-group-item\">\n        <md-select placeholder=\"Select Resolution\" class=\"w-100\" [(ngModel)]=\"settings.defaultRes\" name=\"videoRes\">\n          <md-option *ngFor=\"let v of videoRes\" [value]=\"v\" >\n            {{v}}\n          </md-option>\n        </md-select>\n      </li>\n\n      <li class=\"list-group-item\">\n        <span class=\"col-md-8\">\n          <md-slider class=\"w-100\" thumb-label=\"true\" step=1 min=0 max=5 tick-interval=5 [(ngModel)] = \"settings.numberOfProbes\"></md-slider>\n        </span>\n        <span class=\"col-md-4 push-md-2\">\n          <h3>\n          {{settings.numberOfProbes}}\n          </h3>\n        </span>\n        \n      </li>\n\n      <li class=\"list-group-item\">\n        <div class=\"input-group\">\n          <span class=\"input-group-addon\"><button><i class=\"fa fa-folder-open-o\" aria-hidden=\"true\"></i></button></span>\n          <input type=\"text\" class=\"form-control w-100\" placeholder=\"Default Video Folder Path\">\n        </div>\n        \n      </li>\n    </ul>\n\n  </md-sidenav>\n</md-sidenav-container>"

/***/ }),

/***/ "../../../../../src/app/components/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = (function () {
    function SettingsComponent() {
        this.sideNavOpen = false;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.videoRes = ["1080p", "720p", "480p", "360p", "240p", "144p"];
        this.settings = {
            defaultRes: "420p",
            numberOfProbes: 0,
            videoDirectory: "random"
        };
        console.log(this.sideNavOpen);
    };
    SettingsComponent.prototype.changeSideNav = function () {
        if (this.sideNavOpen) {
            this.sideNavOpen = false;
        }
        else {
            this.sideNavOpen = true;
        }
        console.log(this.sideNavOpen);
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-settings',
        template: __webpack_require__("../../../../../src/app/components/settings/settings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/settings/settings.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SettingsComponent);

//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/url/url.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/url/url.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card\">\n    <div class=\"card-block\">\n      <form class=\"form-inline\">\n        <div class=\"col-md-10\">\n          <div class=\"form-group w-100\">\n            <input type=\"text\" class=\"form-control w-100\" on-focusout=\"focusOut()\" on-focus=\"focusOn()\" [placeholder]=\"placeHolder\">\n          </div>\n        </div>\n        <div class=\"col-md-2\">\n           <input type=\"submit\" class=\"btn btn-primary width-100\" value=\"Download\">\n        </div>\n       </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/url/url.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrlComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UrlComponent = (function () {
    function UrlComponent() {
    }
    UrlComponent.prototype.ngOnInit = function () {
        this.url = "";
        this.P_text = "Enter Video Link";
        this.placeHolder = "Enter Video Link";
    };
    UrlComponent.prototype.focusOn = function () {
        this.placeHolder = "";
    };
    UrlComponent.prototype.focusOut = function () {
        if (this.url.trim.length == 0) {
            this.placeHolder = this.P_text;
        }
    };
    return UrlComponent;
}());
UrlComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-url',
        template: __webpack_require__("../../../../../src/app/components/url/url.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/url/url.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UrlComponent);

//# sourceMappingURL=url.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map