import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MsstComponent } from './msst.component';
import { MsstQAComponent } from './components/msst-qa/msst-qa.component';
import { MsstStagingComponent } from './components/msst-staging/msst-staging.component';
// import { MsstProductionComponent } from './components/msst-production/msst-production.component';

const routes: Routes = [
  { 
    path: '', 
    component:MsstComponent,
    children:[
      {
        path:'qa',
        component:MsstQAComponent
      },
      {
        path:'staging',
        component:MsstStagingComponent
      },
      // {
      //   path:'production',
      //   component:MsstProductionComponent
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MsstRoutingModule { }
