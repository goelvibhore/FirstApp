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
var template_1 = require('../Model/template');
var column_1 = require('../Model/column');
var TemplateService = (function () {
    function TemplateService() {
        this.templates = [];
        // Add a common template - dummy data
        var template = new template_1.Template();
        template.templateId = "0";
        template.templateName = "Basic test template";
        template.columns = [];
        var col = new column_1.column();
        col.columnId = "1";
        col.columnName = "Particular";
        template.columns.push(col);
        col = new column_1.column();
        col.columnId = "2";
        col.columnName = "Amount";
        template.columns.push(col);
        this.templates.push(template);
    }
    TemplateService.prototype.saveTemplate = function (template) {
        this.templates.push(template);
    };
    TemplateService.prototype.getTemplates = function () {
        return this.templates;
    };
    TemplateService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TemplateService);
    return TemplateService;
}());
exports.TemplateService = TemplateService;
//# sourceMappingURL=template.service.js.map