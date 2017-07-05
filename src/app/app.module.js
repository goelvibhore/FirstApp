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
var core_1 = require('@angular/core');
var app_component_1 = require('./app.component');
var platform_browser_1 = require('@angular/platform-browser');
var template_component_1 = require('./template.component');
var forms_1 = require('@angular/forms');
var template_service_1 = require('./Service/template.service');
var templateData_service_1 = require('./Service/templateData.service');
// Provind routing
// import { RouterModule } from '@angular/router';
var Routes_1 = require('./Routes');
var datafill_component_1 = require('./datafill.component');
var report_component_1 = require('./report.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                Routes_1.AppRouteModule,
                forms_1.FormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                template_component_1.TemplateComponent,
                datafill_component_1.DataFillComponent,
                report_component_1.ReportingComponent
            ],
            providers: [
                template_service_1.TemplateService,
                templateData_service_1.TemplateDataService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map