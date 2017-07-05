import { Injectable } from '@angular/core';
import { DataInfo, DataValues } from '../Model/dataValues';

@Injectable()
export class TemplateDataService{

    constructor(){
        if(this.templateDatas == null || this.templateDatas == undefined)
        {
            this.templateDatas = [];
        }
    }

    getDataByTemplate(templateId: string): DataInfo[]{
        let data = new Array<DataInfo>();

        if(this.templateDatas.length > 0)
        {
            data = this.templateDatas.filter(x=>x.templateId == templateId);
        }

        return data;
    }

    templateDatas: Array<DataInfo>;
}