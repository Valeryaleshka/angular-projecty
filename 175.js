"use strict";
(self["webpackChunkangular_projecty"] = self["webpackChunkangular_projecty"] || []).push([[175],{

/***/ 175:
/*!****************************************************************!*\
  !*** ./src/app/pages/app-not-found/app-not-found.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppNotFoundComponent: () => (/* binding */ AppNotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);



let AppNotFoundComponent = /*#__PURE__*/(() => {
  class AppNotFoundComponent {
    router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router);
    ngOnInit() {
      console.log(this.router.url);
    }
    static ɵfac = function AppNotFoundComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppNotFoundComponent)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppNotFoundComponent,
      selectors: [["app-app-not-found"]],
      decls: 10,
      vars: 0,
      consts: [[1, "not-found-container", "d-flex", "justify-content-center", "align-items-center", "vh-100"], [1, "text-center"], [1, "display-1", "fw-bold"], [1, "fs-3"], [1, "lead"], ["routerLink", "/", 1, "btn", "btn-primary", "btn-lg"]],
      template: function AppNotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "404");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Oops! Page not found.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "The page you\u2019re looking for doesn\u2019t exist.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Go Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  background: linear-gradient(135deg, #6a11cb, #2575fc);\n  color: white;\n  height: 100vh;\n}\n[_nghost-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 8rem;\n  margin-bottom: 1rem;\n}\n[_nghost-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n[_nghost-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background-color: #ff6b6b;\n  border-color: #ff6b6b;\n}\n[_nghost-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #ff4757;\n  border-color: #ff4757;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1ub3QtZm91bmQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EscURBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUNGO0FBTEE7RUFPSSxlQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQVRBO0VBWUkscUJBQUE7QUFBSjtBQVpBO0VBZ0JJLHlCQUFBO0VBQ0EscUJBQUE7QUFESjtBQUVJO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtBQUFOIiwiZmlsZSI6ImFwcC1ub3QtZm91bmQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNmExMWNiLCAjMjU3NWZjKTtcbiAgY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDEwMHZoO1xuXG4gIGgxIHtcbiAgICBmb250LXNpemU6IDhyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuXG4gIHAge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgfVxuXG4gIC5idG4tcHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNmI2YjtcbiAgICBib3JkZXItY29sb3I6ICNmZjZiNmI7XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0NzU3O1xuICAgICAgYm9yZGVyLWNvbG9yOiAjZmY0NzU3O1xuICAgIH1cbiAgfVxufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYXBwLW5vdC1mb3VuZC9hcHAtbm90LWZvdW5kLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLHFEQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFDRjtBQUxBO0VBT0ksZUFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFUQTtFQVlJLHFCQUFBO0FBQUo7QUFaQTtFQWdCSSx5QkFBQTtFQUNBLHFCQUFBO0FBREo7QUFFSTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7QUFBTjs7QUFFQSxvK0JBQW8rQiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2YTExY2IsICMyNTc1ZmMpO1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogMTAwdmg7XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogOHJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG5cbiAgcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICB9XG5cbiAgLmJ0bi1wcmltYXJ5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2YjZiO1xuICAgIGJvcmRlci1jb2xvcjogI2ZmNmI2YjtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjQ3NTc7XG4gICAgICBib3JkZXItY29sb3I6ICNmZjQ3NTc7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return AppNotFoundComponent;
})();

/***/ })

}]);
//# sourceMappingURL=175.js.map