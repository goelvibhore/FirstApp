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
// import { FORM_DIRECTIVES } from '@angular/forms';
var template_1 = require('./Model/template');
var column_1 = require('./Model/column');
var template_service_1 = require('./Service/template.service');
var TemplateComponent = (function () {
    function TemplateComponent(templateService) {
        this.templateService = templateService;
        // this.template = new Template();
        // this.columns = this.template.columns = [];
        this.resetTemplate();
    }
    TemplateComponent.prototype.addColumn = function () {
        var col = new column_1.column();
        col.columnId = (this.template.columns.length + 1).toString();
        this.template.columns.push(col);
    };
    TemplateComponent.prototype.saveTemplate = function (formval) {
        this.template.templateId = (this.templateService.getTemplates().length + 1).toString();
        // alert(this.template.templateId);
        // alert(this.template.templateName);
        // alert(this.template.columns.length);
        this.templateService.saveTemplate(this.template);
        this.resetTemplate();
        alert('Saving of template done');
    };
    TemplateComponent.prototype.resetTemplate = function () {
        this.template = new template_1.Template();
        this.columns = this.template.columns = [];
    };
    TemplateComponent.prototype.onSubmit = function (formval) {
        // alert(formval.title);
        // alert(formval.template.templateName);
        // alert(this.columns.length);
        // alert("vibhor");
    };
    TemplateComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './template.component.html'
        }), 
        __metadata('design:paramtypes', [template_service_1.TemplateService])
    ], TemplateComponent);
    return TemplateComponent;
}());
exports.TemplateComponent = TemplateComponent;
//# sourceMappingURL=template.component.js.map