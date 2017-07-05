import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { TemplateComponent } from './template.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { TemplateService } from './Service/template.service';
import { TemplateDataService } from './Service/templateData.service';

// Provind routing
// import { RouterModule } from '@angular/router';
import { AppRouteModule } from './Routes';
import { DataFillComponent } from './datafill.component';
import { ReportingComponent } from './report.component';

@NgModule({
    imports:[
        BrowserModule,
        AppRouteModule,
        FormsModule
    ],
    declarations:[
        AppComponent,
        TemplateComponent,
        DataFillComponent,
        ReportingComponent
    ],
    providers:[
        TemplateService,
        TemplateDataService
    ],
    bootstrap:[AppComponent]
})

export class AppModule{ 
    
}