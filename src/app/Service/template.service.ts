import { Injectable } from '@angular/core';
import { Template } from '../Model/template';
import { column } from '../Model/column';

@Injectable()
export class TemplateService{

    constructor(){
        this.templates = [];

        // Add a common template - dummy data
        var template = new Template();
        template.templateId = "0";
        template.templateName = "Basic test template";
        template.columns = [];

        var col = new column();
        col.columnId = "1";
        col.columnName = "Particular"
        template.columns.push(col);

        col = new column();
        col.columnId = "2";
        col.columnName = "Amount"
        template.columns.push(col);

        this.templates.push(template);
    }

    saveTemplate(template: Template): void{
        this.templates.push(template);
    }

    getTemplates(): Template[]{
        return this.templates;
    }

    templates: Template[];
}