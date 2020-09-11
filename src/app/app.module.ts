import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppLoginComponent} from './components/app-login/app-login.component';
import { HeaderComponent } from './components/header/header.component';

import { LoginCredentialsService } from './services/login-credentials.service';
import { DataExchangeService } from './services/data/data-exchange.service';
import { ExcelService } from './services/data/excel.service';
import { HeaderService } from './services/header.service';
import { InterceptorService } from './services/interceptor.service'

import { HomepageComponent } from './components/homepage/homepage.component';
import { CookieService } from 'ngx-cookie-service'

import { MyblueModule } from './myblue/myblue.module';
import { MsstModule } from './msst/msst.module';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import {ShareFooterModule } from './share-footer/share-footer.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material-module';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AddTestDataComponent } from './dialog-pages/add-test-data/add-test-data.component';





@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent,
    HeaderComponent,
    HomepageComponent,
    MaintenanceComponent,
    AddTestDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MyblueModule,
    MsstModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatTooltipModule,
    ShareFooterModule
    // MatFormFieldModule
  ],
  providers: [
    {provide:External},
    LoginCredentialsService,
    CookieService,
    DataExchangeService,
    ExcelService,
    HeaderService,
    // {
    //   provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true
    // }
  ],exports:[],
  bootstrap: [AppComponent],
  entryComponents:[AddTestDataComponent]
})

export class AppModule {  }