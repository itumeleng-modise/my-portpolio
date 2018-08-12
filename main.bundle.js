webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "/* .wrapper {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-column-gap: 1em;\n    grid-row-gap: 1em;\n    grid-gap: 1em;\n    grid-auto-rows: 200px; fixed height\n    grid-auto-rows: minmax(200px, auto)\n}\n\n.nested {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-gap: 1em;\n    justify-items: stretch;\n    align-items: stretch;\n}\n\n.wrapper > div {\n    background: #eee;\n    padding: 1em;\n}\n\n.wrapper > div:nth-child(odd){\n    background: #ccc;\n}\n\n.nested > div {\n    border: #333 1px solid;\n    padding: 1em;\n}\n\n.b1{\n    align-self: start;\n    grid-column: 1/3;\n    grid-row: 1/3;\n}\n\n.b2{\n    align-self: end;\n    grid-column: 3;\n    grid-row: 1/3;\n}\n\n.b3{\n    justify-self: end;\n    grid-column: 2/4;\n    grid-row: 3;\n} */"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!--div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul-->\n<app-home></app-home>\n<router-outlet></router-outlet>\n<!-- <!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>Document</title>\n</head>\n\n<body>\n  <div class=\"wrapper\">\n    <div>\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, doloribus! Libero qui beatae illo, recusandae autem\n      voluptatibus illum unde in dolore id veritatis consectetur alias rem similique, nesciunt ullam sit quaerat dignissimos\n      magnam sint! Similique, aspernatur nemo. Quasi, corrupti rerum. Fugit corrupti laudantium animi rerum ipsum! Autem\n      placeat aspernatur reiciendis ipsam omnis deserunt dolor facilis cumque temporibus, recusandae tenetur velit adipisci,\n      quisquam vitae similique unde praesentium. Error optio, illum quae earum quidem magni quo accusamus, pariatur et delectus\n      tenetur veritatis.\n    </div>\n    <div>\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quo quis quod repudiandae optio molestias nisi, quasi quas,\n      laborum ducimus vel rem aut maiores fugiat tempore nostrum at qui cupiditate.\n    </div>\n    <div>\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, doloribus! Libero qui beatae illo, recusandae autem\n      voluptatibus illum unde in dolore id veritatis consectetur alias rem similique, nesciunt ullam sit quaerat dignissimos\n      magnam sint! Similique, aspernatur nemo. Quasi, corrupti rerum. Fugit corrupti laudantium animi rerum ipsum! Autem\n      placeat aspernatur reiciendis ipsam omnis deserunt dolor facilis cumque temporibus, recusandae tenetur velit adipisci,\n      quisquam vitae similique unde praesentium. Error optio, illum quae earum quidem magni quo accusamus, pariatur et delectus\n      tenetur veritatis.\n    </div>\n    <div>\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quo quis quod repudiandae optio molestias nisi, quasi quas,\n      laborum ducimus vel rem aut maiores fugiat tempore nostrum at qui cupiditate.\n    </div>\n    <div class=\"nested\">\n      <div class=\"b1\">Lorem 1</div>\n      <div class=\"b2\">Lorem 2</div>\n      <div class=\"b3\">Lorem 3</div>\n      <div class=\"b4\">Lorem 4</div>\n    </div>\n  </div>\n\n</body>\n\n</html> -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_font_awesome__ = __webpack_require__("./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular_font_awesome__["a" /* AngularFontAwesomeModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "body,div,footer,form,h1,h3,header,html,img,li,menu,nav,p,span,ul,#row-hero{\n    margin:0;\n    padding:0;\n    border:0;\n}\n* {\n    -webkit-box-sizing:border-box;\n            box-sizing:border-box;\n    font-family:Open Sans,sans-serif;\n}\nheader{\n    /* padding-top:2rem; */\n    background: #2E4053;\n}\n.menu{\n    padding: 1rem;\n    background: #5d9156;\n    text-align: center;\n    /* position: fixed;\n    top: 0 */\n}\n.menu-btn{\n    display:none\n}\n.menu-btn .btn-line{\n    width: 28px;\n    height: 3px;\n    margin: 0 0 5px;\n    background: #fff;\n    -webkit-animation: ease-out;\n            animation: ease-out;    \n}\nheader nav li a:hover{\n    color:#00ff52\n}\nnav ul li{\n    display:inline-block\n}\nnav ul li a{\n    text-decoration:none;\n    font-weight:600;\n    color:#fff;\n    padding: 10px 32px 10px;\n}\n.menu-branding{\n    /* margin: 3rem 0; */\n    text-align: center\n}\n.profile-info .info{\n    display:inline-block;\n    padding:1rem;\n    vertical-align: top;\n    margin-top: 2.3rem;\n    /* border: 2px solid #1eff00; */\n    border-radius: 25px;\n}\n.profile-info #profile-pic{\n    max-width: 150px;\n    border-radius: 50%;\n    border: 2px solid #7eb676;\n    /* opacity: .8; */\n}\n.name{\n    font-size:2rem;\n    padding-bottom:5px;\n    /* font-family:open sans; */\n    color:#fff\n}\n.title{\n    color:#5d9156\n}\n#row-hero p a:hover{\n    color: #1eff00;\n    -webkit-transition:all .4s ease;\n    transition:all .4s ease\n}\n#row-hero p a,.row-hero a:visited{\n    color:#fff;\n    text-decoration:none;\n    border-bottom:1px dotted #fff\n}\n#row-hero{\n    padding:26vh;\n    /* overflow: hidden; */\n    background: #7eb676;\n    margin-bottom: 2rem\n}\n.container{\n    width:900px;\n    margin:0 auto\n}\n.portfolio-item{\n    padding: .5rem 0 5rem 0;\n    display:block;\n    /* border-bottom:1px solid #e0e0e0 */\n}\n/* .container:last-of-type .portfolio-item{\n    border-bottom:none\n} */\n.fadein-fast{\n    -webkit-animation:a 2s;\n    animation:a 2s;\n}\n#hero p{\n    /* padding:45px 0 18px; */\n    padding-top: 1rem;\n    margin-bottom:20px auto;\n    color:#fff;\n    font-size:20px;\n}\n.row{\n    background:#fff;\n    height:100%\n}\n.description{\n    /* padding: 1em; */\n    font-size: 1.3rem;\n    color:#868686\n}\n/* .skills li{\n    color:#fff;\n    text-shadow:0 1px 0 rgba(0,0,0,.15);\n    line-height:32px;\n    display:inline;\n    border-radius:4px;\n    font-size:12px;\n    background:#2E4053;\n    padding:4px 9px\n} */\n.separator{\n    margin:1.5rem auto;\n    background:url(\"https://itumeleng.gitlab.io/ng5/../../../../../assets/img/separator.png\");\n    height:9px;width:576px\n}\n.screenshot{\n    width:48%\n}\n.description-container{\n    width:51%\n}\n#contact-number{\n    word-wrap: initial;\n    margin:9px;\n    background:#2E4053;\n    padding:9px;\n    border-radius:5px;\n    color:#fff;\n    font-size:16px;\n    font-weight:700;   \n}\nh1{\n    color:#fff;\n    font-size:2rem;\n    text-align: center;\n}\nh3{\n    color:#303030;\n    font-size:2rem;\n    margin: 3rem 0 1rem 0\n}\nh3 a{\n    color:#303030;\n    text-decoration:none;\n    -webkit-transition:color .2s;\n    transition:color .2s\n}\nh3 a:hover{\n    color:#00ff52\n}\n.profile-info{\n    /* margin-top: -150px; */\n    padding:20px 0;\n    clear:both;\n}\n.span4{\n    width:35%;\n    float:left;\n}\n.portfolio-col,.span4,.span8{\n    display:inline-block\n}\n.span8{\n    width:65%;\n    float: float\n}\n.portfolio-col:last-of-type{\n    padding:0 50px\n}\n.portfolio-item .portfolio-col:first-of-type{\n    float:left\n}\n.button:hover{\n    background:#48ff00;\n}\n.portfolio-item img{\n    width:100%\n}\n#contact{\n    margin-bottom:2rem;\n}\ninput[type=email],input[type=text]{width:30%}\ninput[type=email],input[type=text],textarea{\n    padding:12px 24px;\n    font-size:15px;\n    font-family:open sans;\n    color:#000;\n    margin:0 20px 10px 0;\n    border:none;\n    background:rgba(0,0,0,.06);\n    font-weight:700;\n    border-radius:5px\n}\ninput[type=text]:first-of-type,textarea[type=text]:first-of-type{\n    margin-left:0\n}\ninput[type=text]:last-of-type{\n    margin-right:0\n}\ninput:focus,textarea:focus{\n    outline:0;\n    -webkit-box-shadow:0 0 4px #000;\n            box-shadow:0 0 4px #000;\n    border-radius:5px\n}\ninput:focus:required:invalid:focus,select:focus:required:invalid:focus,textarea:focus:required:invalid:focus{\n    border-color:rgba(82,168,236,.8);\n    -webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6);\n            box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6)\n}\ninput::-webkit-input-placeholder,textarea::-webkit-input-placeholder{\n    color:#848080;\n    font-weight:400\n}\ninput:-moz-placeholder,input::-moz-placeholder,textarea::-webkit-input-placeholder{\n    color:#848080;\n    font-weight:400\n}\ninput:-ms-input-placeholder,textarea::-webkit-input-placeholder{\n    color:#848080;\n    font-weight:400\n}\ntextarea{\n    color:#000;\n    width:98.2%;\n    resize:none;\n    overflow:hidden\n}\n.button{\n    text-align:center;\n    color:#fff;\n    background:#2E4053;\n    padding:9px 31px;\n    text-transform:uppercase;\n    font-size:12px;\n    font-weight:700;\n    font-family:open sans,sans-serif;\n    letter-spacing:0;\n    border-radius:5px;\n    border:1px solid #2E4053;\n    -webkit-transition:padding .25s,background .25s;\n    transition:padding .25s,background .25s\n}\nfooter{\n    padding:20px;\n    background:#2E4053;\n    padding-top:30px;\n    font-size:1em;\n    color:#fff;\n    font-family:open sans,sans-serif;\n    clear:both\n}\nfooter ul li{\n    display:block;\n    margin:10px 0;\n}\n.footer-link{\n    color:#fff;\n    -webkit-transition:.4s;\n    -webkit-transition:.2s;\n    transition:.2s;\n    text-decoration:none;\n}\nfooter ul li a:hover{\n    color:#48ff00\n}\n#copyright {\n    display: block;\n    text-align:center;\n    padding-top: 20px;\n}\n/* @keyframes a{\n    0%{\n        opacity:0\n    }\n    to{\n        opacity:1\n    }\n}\n@-webkit-keyframes a{\n    0%{\n        opacity:0\n    }\n    to{\n        opacity:1\n    }\n} */\n@media (max-width:1073px){\n    .container{\n        width:100%;padding:0 70px\n    }\n    input[type=email],input[type=text],textarea{\n        margin:10px 5px\n    }\n}\n@media (max-width:1072px){\n    #contact-form .button{\n        width:100%\n    }\n    .container{\n        padding:0 30px;\n        text-align:center;\n        width:100%\n    }\n    input[type=email],input[type=text]{\n        display:block;\n        width:100%;\n        margin:13px 0\n    }\n    .portfolio-col{\n        width:100%;\n        text-align:center;\n        display:block;\n    }\n    .portfolio-item{\n        padding:0px 21px 0px\n    }\n    .portfolio-item img{\n        margin-bottom:.5rem;\n        width:65%\n    }\n    /* h3{\n        margin-bottom:1rem\n    } */\n    /* .projects .row{\n        padding-top:0\n    }\n    .projects .container{\n        padding:0\n    } */\n}\n/* @media (max-width:800px){\n    .nav-fixed{\n        position:relative!important\n    }\n} */\n@media (max-width:690px){\n    nav ul,.separator{\n        display:none\n    }\n    .menu{\n        padding: 1.6rem;\n        margin-bottom: 1.5rem;\n        background: #5d9156;\n    }\n    .menu-btn{\n        position: absolute;\n        z-index: 3;\n        right: 25px;\n        top: 25px;\n        cursor: pointer;\n        display:block\n    }\n    #hero{\n        margin-top:0\n    }\n    #hero p{\n        padding-top:1rem\n    }\n    #row-hero{\n        padding:30px 10px\n    }\n    /* #nav li a:hover{\n        background:0 0;\n        color:#f65151\n    } */\n    .span4{\n        width:100%\n    }\n    /* #header{\n        text-align:center!important;\n        padding-bottom:28px\n    } */\n    .row{\n        padding-top:0;\n        text-align:center\n    }\n    h1{\n        font-size:27px\n    }\n    #hero p{\n        line-height:25px;\n        font-size:16px\n    }\n}\n@media (max-width:480px){\n    .container{\n        padding:0 20px\n    }\n    h3{\n        font-size:25px\n    }\n    .description{\n        font-size:1rem\n    }\n    .projects h3{\n        padding:10px 0;\n        clear:both;\n        font-size:37px\n    }\n    #hero p{\n        padding-top:1rem\n    }\n    /* nav{\n        width:100%\n    }\n    nav ul li a{\n        width:25%\n    } */\n    .profile-info .info{\n        margin-top: .5rem;\n    }\n    footer ul li{\n        font-size: .9rem;\n    }\n    #copyright{\n        font-size: 1rem;\n    }\n    .portfolio-col,.portfolio-col img,.span8{\n        width:100%\n    }\n    .portfolio-col:last-of-type{\n        padding:0\n    }\n    .menu{\n        padding: 1.6rem;\n        margin-bottom: 1.5rem;\n        background: #5d9156;\n    }\n}\n.icon{\n    width: 50px;\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=en>\n\n<head>\n\t<meta charset=UTF-8>\n\t<title>Itumeleng Modise | Itu Web Dev</title>\n\t<meta content=\"Junior Web developer based in Pretoria, more interested in Angular 5, Django, Bootstrap 4\n            HTML 5, Semantic UI and CSS3.\" name=description>\n\t<meta content=\"itu web development\" name=keywords>\n\t<link href=../home.css rel=stylesheet>\n\t<meta content=\"width=device-width,user-scalable=no\" name=viewport>\n\t<link href=favicon.ico rel=\"shortcut icon\" type=image/x-icon>\n\t<link href=favicon.ico rel=icon type=image/x-icon>\n</head>\n\n<body>\n\t<header>\n\t\t<!-- <div class=\"container\"> -->\n\t\t\t<nav class=\"menu\">\n\t\t\t\t<ul class=\"menu-nav\">\n\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t<a href=#top class=\"nav-link\">Home</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t<a href=\"#\" class=\"nav-link\">About Me</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t<a href=#projects class=\"nav-link\">Portfolio</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t<a href=\"#\" class=\"nav-link\">Skills</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t<a href=#contact class=\"nav-link\">Contact</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<div class=\"menu-btn\">\n\t\t\t\t\t<div class=\"btn-line\"></div>\n\t\t\t\t\t<div class=\"btn-line\"></div>\n\t\t\t\t\t<div class=\"btn-line\"></div>\n\t\t\t\t</div>\n\t\t\t</nav>\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"profile-info\">\n\t\t\t\t\t<img id=\"profile-pic\" alt=\"profile pic\" src=\"assets/img/itu.jpg\">\n\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t\t<div class=\"name\">Itumeleng Modise</div>\n\t\t\t\t\t\t<div class=\"title\">JUNIOR DEVELOPER</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t<!-- </div> -->\n\t</header>\n\t<main id=\"home\">\n\t\t<div id=\"row-hero\">\n\t\t\t<div class=container>\n\t\t\t\t<div id=\"hero\">\n\t\t\t\t\t<h1 class=\"fadein-fast\">Front-end Web Developer</h1>\n\t\t\t\t\t<p class=\"fadein-fast\">Based in Pretoria with 2 years of experince in web development. Passionate about learning cutting edge web technologies\n\t\t\t\t\t\tand bringing things to life. If you want to explore with me get in touch\n\t\t\t\t\t\t<a class=\"link\" href=#contact>here</a>.\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div id=\"projects\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"portfolio-item\">\n\t\t\t\t\t\t<div class=\"portfolio-col screenshot\">\n\t\t\t\t\t\t\t<img alt=\"Drought-App\" src=\"assets/img/drought_app.png\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"portfolio-col description-container\">\n\t\t\t\t\t\t\t<h3>\n\t\t\t\t\t\t\t\t<a href=\"https://disman.afis.co.za/drought/\" target=_blank>Drought Monitor</a>\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t<p class=description>Historical drought visualisation using Standard Precipitation Index (SPI) \n\t\t\t\t\t\t\t\tand Percentage of Average Seasonal Greenness (PASG).</p>\n\t\t\t\t\t\t\t<!-- <ul class=skills>\n\t\t\t\t\t\t\t\t<li>Semantic UI</li>\n\t\t\t\t\t\t\t\t<li>JavaScript</li>\n\t\t\t\t\t\t\t\t<li>JQuery</li>\n\t\t\t\t\t\t\t\t<li>Django</li>\n\t\t\t\t\t\t\t\t<li>PostgreSQL Database</li>\n\t\t\t\t\t\t\t\t<li>GeoServer</li>\n\t\t\t\t\t\t\t</ul> -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"separator\"></div>\n\t\t\t</div>\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"portfolio-item\">\n\t\t\t\t\t\t<div class=\"portfolio-col screenshot\">\n\t\t\t\t\t\t\t<img alt=\"Severe Weather\" src=\"assets/img/weather_app.png\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"portfolio-col description-container\">\n\t\t\t\t\t\t\t<h3>\n\t\t\t\t\t\t\t\t<a href=\"https://disman.afis.co.za/weather/\" target=_blank>Severe Weather</a>\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t<p class=\"description\">Visualising weather data by stations including clouds, precipitation, live and recent lightning strikes.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<!-- <ul class=\"skills\">\n\t\t\t\t\t\t\t\t<li>Semantic UI</li>\n\t\t\t\t\t\t\t\t<li>JavaScript</li>\n\t\t\t\t\t\t\t\t<li>JQuery</li>\n\t\t\t\t\t\t\t</ul> -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- <div class=\"separator\"></div> -->\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<h3>Get In Touch</h3>\n\t\t\t\t<!-- <div class=\"center span4\">\n\t\t\t\t\t\t<div id=\"contact-number\">\n\t\t\t\t\t\t\t+27 76 684 6462\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div id=\"social\">\n\t\t\t\t\t\t\t<a href=\"http://github.com/itumeleng-modise\" target=\"_blank\">\n\t\t\t\t\t\t\t\t<img class=\"icon\" alt=\"github icon\" src=\"assets/img/github.png\">\n\t\t\t\t\t\t\t\t<i class=\"fab fa-github\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<a href=\"https://www.linkedin.com/in/itumeleng-modise-b9b92973/\" target=_blank>\n\t\t\t\t\t\t\t\t<img class=\"icon\" alt=\"linkedin icon\" src=\"assets/img/linkedin.png\">\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<a href=\"mailto:edison.modise@gmail.com\">\n\t\t\t\t\t\t\t\t<img class=\"icon\" alt=\"main icon\" src=\"assets/img/mail.png\">\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div> -->\n\t\t\t\t<div class=span8 id=contact>\n\t\t\t\t\t<form action=mailer.php id=contact-form method=post name=contact-form>\n\t\t\t\t\t\t<div class=buffer-bottom>\n\t\t\t\t\t\t\t<input type=text name=name placeholder=Name required id=field1>\n\t\t\t\t\t\t\t<input type=email name=email placeholder=Email required>\n\t\t\t\t\t\t\t<input type=text name=phone placeholder=Phone required>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=buffer-bottom>\n\t\t\t\t\t\t\t<textarea class=message name=message placeholder=Message required rows=6></textarea>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<span id=submit-response></span>\n\t\t\t\t\t\t<div class=pull-right>\n\t\t\t\t\t\t\t<input type=submit class=button value=send>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</main>\n\t<footer>\n\t\t<div class=\"container\">\n\t\t\t<ul>\n\t\t\t\t<li>\n\t\t\t\t\t<a class=\"footer-link\" href=#top>HOME</a>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a class=\"footer-link\" href=#projects>PROJECTS</a>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a class=\"footer-link\" href=#contact>CONTACT</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<div id=\"copyright\"> Copyright &copy; 2018 Itumeleng Modise</div>\n\t\t</div>\n\t</footer>\n\t<script src=\"//code.jquery.com/jquery-latest.min.js\"></script>\n\t<script src=\"dist/scripts.min.js\"></script>\n\t<script src=\"https://buttons.github.io/buttons.js\" async defer id=github-bjs></script>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map