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
var template_service_1 = require('./Service/template.service');
var templateData_service_1 = require('./Service/templateData.service');
var dataValues_1 = require('./Model/dataValues');
// import { form } from '@angular/forms';
var DataFillComponent = (function () {
    function DataFillComponent(templateService, tempaletDataService) {
        this.templateService = templateService;
        this.tempaletDataService = tempaletDataService;
        this.templates = templateService.getTemplates();
        this.dataItems = new dataValues_1.DataValues();
        this.selectedTemplate = null;
    }
    DataFillComponent.prototype.addValues = function (fvalue) {
        // dicInfo.set
        alert(fvalue.Column1);
    };
    DataFillComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './datafill.component.html'
        }), 
        __metadata('design:paramtypes', [template_service_1.TemplateService, templateData_service_1.TemplateDataService])
    ], DataFillComponent);
    return DataFillComponent;
}());
exports.DataFillComponent = DataFillComponent;
//# sourceMappingURL=datafill.component.js.map