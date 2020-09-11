import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLoginComponent } from './components/app-login/app-login.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/homepage',
    pathMatch:"full"
  },
  {
    path:'login',
    component:AppLoginComponent
  },
  {
    path:'homepage',
    component:HomepageComponent,
    children:[
    { 
      path: 'msst', 
      loadChildren: 'src/app/msst/msst.module#MsstModule'
    },
    { 
      path: 'myblue',
      loadChildren:'src/app/myblue/myblue.module#MyblueModule'
    }
  ]
  },
  // {
  //   path:'msst',
  //   component:MsstComponent,
  // },
  // {
  //   path:'myblue',
  //   component:MyBlueComponent,
  // }
];

@NgModule({
  // providers
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule {}