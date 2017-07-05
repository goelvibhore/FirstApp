import { Component } from '@angular/core';
import { TemplateService } from './Service/template.service';
import { TemplateDataService } from './Service/templateData.service';
import { Template } from './Model/template';
import { DataValues } from './Model/dataValues';
// import { form } from '@angular/forms';

@Component({
    moduleId: module.id,
    templateUrl:'./datafill.component.html'
})

export class DataFillComponent{
    
    constructor(private templateService: TemplateService,
        private tempaletDataService: TemplateDataService){

        this.templates = templateService.getTemplates();
        
        this.dataItems = new DataValues();
        this.selectedTemplate = null;
    }

    addValues(fvalue: any): void{
        // dicInfo.set
        alert(fvalue.Column1);
    }

    selectedTemplate: Template;
    templates: Template[];
    dataItems: DataValues;
}