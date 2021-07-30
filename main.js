(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ivan.Perez\Documents\MyRepo\PWA\portfolio-web-portafolio\src\main.ts */"zUnb");


/***/ }),

/***/ "47Jg":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var t_writer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! t-writer.js */ "Wgzd");
/* harmony import */ var t_writer_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(t_writer_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _github_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../github.service */ "BEXM");



const _c0 = ["asTitle"];
class SidebarComponent {
    constructor(gitHubService) {
        this.gitHubService = gitHubService;
        this.links = [
            {
                link: 'http://youtube.com/leifermendez',
                icon: '<i class="uil uil-youtube"></i>'
            },
            {
                link: 'https://github.com/leifermendez',
                icon: '<i class="uil uil-github-alt"></i>'
            },
            {
                link: 'mailto:leifer33@gmail.com',
                icon: '<i class="uil uil-envelope"></i>'
            },
        ];
        this.initEffect = () => {
            const target = this.asTitle.nativeElement;
            const writer = new t_writer_js__WEBPACK_IMPORTED_MODULE_0___default.a(target, {
                loop: true,
                typeColor: 'white'
            });
            writer
                .changeCursorColor('white')
                .type('Purcharse Orders')
                .rest(2000)
                .clear()
                .type('SEARCH')
                .rest(2000)
                .start();
        };
    }
    ngOnInit() {
        this.gitHubService.getRepo()
            .subscribe(res => this.dataProfile = res);
    }
    ngAfterViewInit() {
        this.initEffect();
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_github_service__WEBPACK_IMPORTED_MODULE_2__["GithubService"])); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], viewQuery: function SidebarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.asTitle = _t.first);
    } }, decls: 11, vars: 1, consts: [[1, "wrapper"], [1, "pre-title", "animate__animated", "animate__fadeInUp", "animation-1"], [1, "title", "animate__animated", "animate__fadeInUp", "animation-2"], ["asTitle", ""], [1, "video-wrapper", "animate__animated", "animate__fadeInUp", "animation-7"], [1, "link-wrapper", "animate__animated", "animate__fadeInUp", "animation-8"], [1, "links", "d-flex", "flex-wrap"], [1, "footer-copy"], ["target", "_blank", 3, "href"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "h1", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.dataProfile == null ? null : ctx.dataProfile.html_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, styles: [".wrapper[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 4rem;\n}\n\n.sub-title[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n}\n\n.pre-title[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n  color: #ffffffdb;\n  font-family: \"IBM Plex Sans\", sans-serif;\n}\n\n.description[_ngcontent-%COMP%] {\n  font-family: \"IBM Plex Sans\", sans-serif;\n  font-size: 1.1rem;\n  line-height: 1.8rem;\n  letter-spacing: 0.2px;\n  color: #ffffff8c;\n}\n\n.video-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.video-wrapper[_ngcontent-%COMP%]:hover:before {\n  background-color: transparent;\n}\n\n.video-wrapper[_ngcontent-%COMP%]:before {\n  top: 0;\n  left: 0;\n  position: absolute;\n  content: \"\";\n  background-color: #00296b75;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  transition: all ease 150ms;\n}\n\n.footer-copy[_ngcontent-%COMP%] {\n  padding: 0.75rem 0.25rem;\n  text-align: center;\n  font-size: 0.85rem;\n}\n\n.footer-copy[_ngcontent-%COMP%]   .icon-footer[_ngcontent-%COMP%] {\n  padding: 0 0.25rem;\n}\n\n.footer-copy[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ffffff78;\n  font-family: \"IBM Plex Sans\", sans-serif;\n  text-decoration: none;\n  font-weight: 300;\n}\n\n.links[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%] {\n  height: 8rem;\n  padding: 0.15rem;\n  display: block;\n}\n\n.links[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .block-in[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  font-size: 2rem;\n  background: #ffffff0a;\n}\n\niframe[_ngcontent-%COMP%] {\n  border: solid 2px #ffffff29;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUNFO0VBQ0UsNkJBQUE7QUFDSjs7QUFFRTtFQUNFLE1BQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7QUFBSjs7QUFJQTtFQUNFLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQURGOztBQUdFO0VBQ0Usa0JBQUE7QUFESjs7QUFJRTtFQUNFLGdCQUFBO0VBQ0Esd0NBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBRko7O0FBUUU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBTEo7O0FBT0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFMTjs7QUFVQTtFQUNFLDJCQUFBO0FBUEYiLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiA0cmVtO1xufVxuXG4uc3ViLXRpdGxlIHtcbiAgcGFkZGluZzogLjVyZW0gMDtcbn1cblxuLnByZS10aXRsZSB7XG4gIHBhZGRpbmc6IC41cmVtIDA7XG4gIGNvbG9yOiAjZmZmZmZmZGI7XG4gIGZvbnQtZmFtaWx5OiAnSUJNIFBsZXggU2FucycsIHNhbnMtc2VyaWY7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIGZvbnQtZmFtaWx5OiAnSUJNIFBsZXggU2FucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBsaW5lLWhlaWdodDogMS44cmVtO1xuICBsZXR0ZXItc3BhY2luZzogLjJweDtcbiAgY29sb3I6ICNmZmZmZmY4Yztcbn1cblxuLnZpZGVvLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJjpob3ZlcjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgJjpiZWZvcmUge1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDI5NmI3NTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMTUwbXM7XG4gIH1cbn1cblxuLmZvb3Rlci1jb3B5IHtcbiAgcGFkZGluZzogLjc1cmVtIC4yNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IC44NXJlbTtcblxuICAuaWNvbi1mb290ZXIge1xuICAgIHBhZGRpbmc6IDAgLjI1cmVtO1xuICB9XG5cbiAgYSB7XG4gICAgY29sb3I6ICNmZmZmZmY3ODtcbiAgICBmb250LWZhbWlseTogJ0lCTSBQbGV4IFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG5cbn1cblxuLmxpbmtzIHtcbiAgLmJsb2NrIHtcbiAgICBoZWlnaHQ6IDhyZW07XG4gICAgcGFkZGluZzogLjE1cmVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgLmJsb2NrLWluIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmYwYTtcbiAgICB9XG4gIH1cbn1cblxuaWZyYW1lIHtcbiAgYm9yZGVyOiBzb2xpZCAycHggI2ZmZmZmZjI5O1xufVxuIl19 */"] });
class LinkModel {
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BEXM":
/*!***********************************!*\
  !*** ./src/app/github.service.ts ***!
  \***********************************/
/*! exports provided: GithubService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubService", function() { return GithubService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class GithubService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = 'https://api.github.com/users/leifermendez/repos';
        this.urlContent = 'https://raw.githubusercontent.com/wiki/leifermendez';
        this.urlRepoProfile = 'https://api.github.com/repos/leifermendez/portfolio-web';
        this.urlPurcharseRequest = 'https://webapi-cottonapps-dev.azurewebsites.net/api/purchaserequisitions/';
        this.loadRepos = () => {
            return this.httpClient.get(`${this.url}?type=owner&per_page=100`)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((item) => item.filter(value => !value.fork)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((item) => item.filter(value => (value.stargazers_count > 3))));
        };
        this.getImage = (text) => {
            try {
                return text.match(/!\[[^\]]*\]\((?<filename>.*?)(?=\"|\))(?<optionalpart>\".*\")?\)/);
            }
            catch (e) {
                return null;
            }
        };
        this.getRepo = () => {
            try {
                return this.httpClient.get(this.urlRepoProfile);
            }
            catch (e) {
                return null;
            }
        };
        this.buildHome = (repo) => {
            let urlContent = this.urlContent;
            // console.log(this.getImage(repo))
            return urlContent += `${repo}/Home.md`;
        };
        this.loadPurcahrseReuqest = () => {
            //'https://localhost:44309/api/purchaserequisitions/filteredBy/(Cf_C_Requesitiontype ne null) and (RequisitionerCode eq 'BENJAMIN.BAROCIO')?&skip=0&top=25'
            return this.httpClient.get(`${this.urlPurcharseRequest}filteredBy/(Cf_C_Requesitiontype ne null) and (RequisitionerCode eq 'BENJAMIN.BAROCIO')?&skip=0&top=25`)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((data) => data));
        };
    }
}
GithubService.ɵfac = function GithubService_Factory(t) { return new (t || GithubService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
GithubService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GithubService, factory: GithubService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "QxUt":
/*!******************************************!*\
  !*** ./src/app/works/works.component.ts ***!
  \******************************************/
/*! exports provided: WorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksComponent", function() { return WorksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _github_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../github.service */ "BEXM");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function WorksComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("block-repo  animate__animated animate__fadeInUp animation-", i_r2 * 2, "\n      col-12 col-sm-12 col-md-12 col-lg-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 9, item_r1.RequisitionDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.ContractRef.Contract + " " + item_r1.ContractRef.Description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.RequisitionNo + " " + item_r1.OrderCodeDesc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.PurchaseRequisition_C_Supplier_Ref.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("OrderCode: ", item_r1.OrderCode, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Company: ", item_r1.Cf_C_Company, " ");
} }
class WorksComponent {
    constructor(gitHubService) {
        this.gitHubService = gitHubService;
    }
    ngOnInit() {
        this.gitHubService.loadRepos().subscribe(res => {
            this.repos = res;
        });
        this.gitHubService.loadPurcahrseReuqest().subscribe(res => {
            this.purcharseR = res;
        });
    }
}
WorksComponent.ɵfac = function WorksComponent_Factory(t) { return new (t || WorksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_github_service__WEBPACK_IMPORTED_MODULE_1__["GithubService"])); };
WorksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorksComponent, selectors: [["app-works"]], decls: 5, vars: 2, consts: [[1, "wrapper", 3, "perfectScrollbar"], [1, "d-flex", "flex-wrap"], [1, "col-12"], [3, "class", 4, "ngFor", "ngForOf"], [1, "block-repo-in", "d-flex"], [1, "left", "d-flex"], [1, "top"], [1, "date"], [1, "description"], [1, "bottom"], [1, "title"], [1, "tag"], [1, "right", "d-flex"], [1, "text"], [1, "uil", "uil-code-branch"], [1, "uil", "uil-star"]], template: function WorksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Lorem ipsum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WorksComponent_div_4_Template, 25, 11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("perfectScrollbar", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.purcharseR);
    } }, directives: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  height: calc(100vh - 4rem);\n  position: relative;\n  display: block;\n  overflow-y: auto;\n}\n\n.block-repo[_ngcontent-%COMP%] {\n  height: 15rem;\n  padding: 0.5rem;\n  display: block;\n}\n\n.block-repo[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  color: #ffffff78;\n  font-size: 0.85rem;\n}\n\n.block-repo[_ngcontent-%COMP%]   .block-repo-in[_ngcontent-%COMP%] {\n  background-color: #ffffff0d;\n  width: 100%;\n  height: 100%;\n  padding: 0.5rem;\n  transition: all ease 150ms;\n}\n\n.block-repo[_ngcontent-%COMP%]   .block-repo-in[_ngcontent-%COMP%]:hover {\n  transform: translate(0px, -5px);\n  box-shadow: 0 4.9px 10px rgba(0, 0, 0, 0.16), 0 39px 80px rgba(0, 0, 0, 0.32);\n}\n\n.block-repo[_ngcontent-%COMP%]   .block-repo-in[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  width: 80%;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.block-repo[_ngcontent-%COMP%]   .block-repo-in[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n}\n\n.block-repo[_ngcontent-%COMP%]   .block-repo-in[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Roboto Mono\", monospace;\n  font-size: 0.8rem;\n  color: var(--color-2);\n  margin-right: 0.5rem;\n  padding: 0.3rem;\n}\n\n.block-repo[_ngcontent-%COMP%]   .block-repo-in[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n  color: #ffffff;\n  opacity: 0.6;\n  font-size: 0.9rem;\n  font-family: \"IBM Plex Sans\", sans-serif;\n}\n\n.block-repo[_ngcontent-%COMP%]   .block-repo-in[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .image-description[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 90px;\n  object-fit: cover;\n  float: left;\n  margin: 0.5rem 0.5rem 0.5rem 0;\n}\n\n.block-repo[_ngcontent-%COMP%]   .block-repo-in[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  align-content: center;\n  font-size: 1.2rem;\n  opacity: 0.7;\n  width: 20%;\n}\n\n.block-repo[_ngcontent-%COMP%]   .block-repo-in[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHdvcmtzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUVBLDBCQUFBO0FBREo7O0FBR0k7RUFDRSwrQkFBQTtFQUNBLDZFQUNFO0FBRlI7O0FBUUk7RUFDRSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQU5OOztBQVFNO0VBQ0UsaUJBQUE7QUFOUjs7QUFVUTtFQUNFLHFDQUFBO0VBR0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQVZWOztBQWNNO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0NBQUE7QUFaUjs7QUFjUTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUFaVjs7QUFpQkk7RUFDRSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFmTjs7QUFpQk07RUFDRSxlQUFBO0FBZlIiLCJmaWxlIjoid29ya3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDRyZW0pO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uYmxvY2stcmVwbyB7XG4gIGhlaWdodDogMTVyZW07XG4gIHBhZGRpbmc6IC41cmVtO1xuICBkaXNwbGF5OiBibG9jaztcblxuICAuZGF0ZSB7XG4gICAgY29sb3I6ICNmZmZmZmY3ODtcbiAgICBmb250LXNpemU6IC44NXJlbTtcbiAgfVxuXG4gIC5ibG9jay1yZXBvLWluIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMGQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IC41cmVtO1xuICAgIC8vb3BhY2l0eTogLjc7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMTUwbXM7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgLTVweCk7XG4gICAgICBib3gtc2hhZG93OlxuICAgICAgICAwIDQuOXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE2KSxcbiAgICAgICAgMCAzOXB4IDgwcHggcmdiYSgwLCAwLCAwLCAwLjMyKVxuICAgIDtcbiAgICAgIC8vb3BhY2l0eTogMTtcbiAgICB9XG5cbiAgICAubGVmdCB7XG4gICAgICB3aWR0aDogODAlO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICB9XG5cbiAgICAgIC50YWcge1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBNb25vJywgbW9ub3NwYWNlO1xuICAgICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgICAgIC8vb3BhY2l0eTogLjc7XG4gICAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItMik7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcbiAgICAgICAgICBwYWRkaW5nOiAuM3JlbTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICBwYWRkaW5nOiAuNXJlbSAwO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgb3BhY2l0eTogLjY7XG4gICAgICAgIGZvbnQtc2l6ZTogLjlyZW07XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnSUJNIFBsZXggU2FucycsIHNhbnMtc2VyaWY7XG5cbiAgICAgICAgLmltYWdlLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICB3aWR0aDogMTMwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgIG1hcmdpbjogLjVyZW0gLjVyZW0gLjVyZW0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5yaWdodCB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICBvcGFjaXR5OiAuNztcbiAgICAgIHdpZHRoOiAyMCU7XG5cbiAgICAgIHNwYW57XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "47Jg");
/* harmony import */ var _works_works_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./works/works.component */ "QxUt");




class AppComponent {
    constructor() {
        this.title = 'portafolio-web';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "d-flex", "flex-wrap"], [1, "col-12", "col-sm-12", "col-md-6", "col-lg-4"], [1, "col-12", "col-sm-12", "col-md-6", "col-lg-8"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidebar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-works", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"], _works_works_component__WEBPACK_IMPORTED_MODULE_3__["WorksComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "47Jg");
/* harmony import */ var _works_works_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./works/works.component */ "QxUt");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");












const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PERFECT_SCROLLBAR_CONFIG"],
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
            //ServiceWorkerModule.register( script: 'ngsw-worker.js', opts:{enabled: environment.production} )
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__["ServiceWorkerModule"].register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production
            })
            // ServiceWorkerModule.register('ngsw-worker.js', {
            //   enabled: environment.production,
            //   // Register the ServiceWorker as soon as the app is stable
            //   // or after 30 seconds (whichever comes first).
            //   registrationStrategy: 'registerWhenStable:30000'
            // })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"],
        _works_works_component__WEBPACK_IMPORTED_MODULE_4__["WorksComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__["ServiceWorkerModule"]] }); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function HeaderComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r1.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", i_r2, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
} }
class HeaderComponent {
    constructor() {
        this.links = [
            {
                src: 'https://www.youtube.com/leifermendez',
                name: 'Youtube'
            },
            {
                src: 'https://github.com/leifermendez',
                name: 'Github'
            },
            {
                src: 'mailto:leifer33@gmail.com',
                name: 'Contacto'
            }
        ];
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 7, vars: 1, consts: [[1, "wrapper", "animate__animated", "animate__fadeInDown"], [1, "section-1"], [1, "name"], [1, "uil", "uil-rocket"], [1, "section-2"], [1, "list-menu"], ["class", "item-menu", 4, "ngFor", "ngForOf"], [1, "item-menu"], ["target", "_blank", 3, "href"], [1, "item-number"], [1, "link"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_li_6_Template, 6, 3, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.links);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 1rem;\n  align-items: center;\n  align-content: center;\n  height: 3.5rem;\n  border-bottom: solid 1px #3d3f7b4d;\n  box-shadow: 0 0 29px #3c3c3c6b;\n}\n\n.section-2[_ngcontent-%COMP%]   .list-menu[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n}\n\n.section-2[_ngcontent-%COMP%]   .list-menu[_ngcontent-%COMP%]   .item-menu[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 0 1rem;\n  transition: all ease 200ms;\n}\n\n.section-2[_ngcontent-%COMP%]   .list-menu[_ngcontent-%COMP%]   .item-menu[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n\n.section-2[_ngcontent-%COMP%]   .list-menu[_ngcontent-%COMP%]   .item-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-weight: 400;\n}\n\n.section-2[_ngcontent-%COMP%]   .list-menu[_ngcontent-%COMP%]   .item-number[_ngcontent-%COMP%] {\n  color: var(--color-2);\n  padding: 0 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBRUEsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsOEJBQUE7QUFBRjs7QUFLRTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FBRko7O0FBSUk7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FBRk47O0FBR007RUFDRSxZQUFBO0FBRFI7O0FBSU07RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0FBRlI7O0FBTUk7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0FBSk4iLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAgMXJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAvL2JhY2tncm91bmQtY29sb3I6IHRvbWF0bztcbiAgaGVpZ2h0OiAzLjVyZW07XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjM2QzZjdiNGQ7XG4gIGJveC1zaGFkb3c6IDAgMCAyOXB4ICMzYzNjM2M2YjtcblxufVxuXG4uc2VjdGlvbi0yIHtcbiAgLmxpc3QtbWVudSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLml0ZW0tbWVudSB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAyMDBtcztcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAuODtcbiAgICAgIH1cblxuICAgICAgYXtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5pdGVtLW51bWJlciB7XG4gICAgICBjb2xvcjogdmFyKC0tY29sb3ItMik7XG4gICAgICBwYWRkaW5nOiAwIC41cmVtO1xuICAgIH1cbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map