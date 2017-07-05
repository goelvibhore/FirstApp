import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TemplateComponent } from './template.component';
import { DataFillComponent } from './datafill.component';
import { ReportingComponent } from './report.component';

// export const appRoutes: Routes
 var appRoutes = [
    {path: "", redirectTo: "/template", pathMatch: "full"},
    { path: 'template', component: TemplateComponent },
    { path: 'report', component: ReportingComponent },
    { path: 'datafill', component: DataFillComponent }
]; 

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})

export class AppRouteModule{

}