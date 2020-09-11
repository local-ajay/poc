import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyBlueComponent } from './myblue.component';
import { MyBlueQAComponent } from './components/myblue-qa/myblue-qa.component';
import { MyBlueStagingComponent } from './components/myblue-staging/myblue-staging.component';
import { MyBlueProductionComponent } from './components/myblue-production/myblue-production.component';

const routes: Routes = [
  { 
    path: '', 
    component:MyBlueComponent,
    children:[
      {
        path:'qa',
        component:MyBlueQAComponent
      },
      {
        path:'staging',
        component:MyBlueStagingComponent
      },
      {
        path:'production',
        component:MyBlueProductionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyBlueRoutingModule { }
