import { Component } from '@angular/core';

// import { FORM_DIRECTIVES } from '@angular/forms';
import { Template } from './Model/template';
import { column } from './Model/column';
import { TemplateService } from './Service/template.service';

@Component({
    moduleId: module.id,
    templateUrl: './template.component.html'
})

export class TemplateComponent{
    constructor(private templateService: TemplateService)
    {
        // this.template = new Template();
        // this.columns = this.template.columns = [];
        this.resetTemplate();
    }

    addColumn(): void{
        var col = new column();
        col.columnId = (this.template.columns.length + 1).toString();

        this.template.columns.push(col);
    }

    saveTemplate(formval: any):void{
        this.template.templateId = (this.templateService.getTemplates().length + 1).toString();
        // alert(this.template.templateId);
        // alert(this.template.templateName);
        // alert(this.template.columns.length);

        this.templateService.saveTemplate(this.template);
        this.resetTemplate();
        alert('Saving of template done');
    }

    resetTemplate():void{
        this.template = new Template();
        this.columns = this.template.columns = [];
    }

    onSubmit(formval: any): void{
        // alert(formval.title);
        // alert(formval.template.templateName);
        // alert(this.columns.length);
        // alert("vibhor");
    }

    template: Template;

    columns: column[];
}