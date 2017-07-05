"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var router_1 = require('@angular/router');
var core_1 = require('@angular/core');
var template_component_1 = require('./template.component');
var datafill_component_1 = require('./datafill.component');
var report_component_1 = require('./report.component');
// export const appRoutes: Routes
var appRoutes = [
    { path: "", redirectTo: "/template", pathMatch: "full" },
    { path: 'template', component: template_component_1.TemplateComponent },
    { path: 'report', component: report_component_1.ReportingComponent },
    { path: 'datafill', component: datafill_component_1.DataFillComponent }
];
var AppRouteModule = (function () {
    function AppRouteModule() {
    }
    AppRouteModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(appRoutes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRouteModule);
    return AppRouteModule;
}());
exports.AppRouteModule = AppRouteModule;
//# sourceMappingURL=Routes.js.map