import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyBlueRoutingModule } from './myblue-routing.module';
import { MyBlueComponent } from './myblue.component';
import { MyBlueQAComponent } from './components/myblue-qa/myblue-qa.component';
import { MyBlueStagingComponent } from './components/myblue-staging/myblue-staging.component';
import { MyBlueProductionComponent } from './components/myblue-production/myblue-production.component';
import { DataExchangeService } from '../services/data/data-exchange.service';

import {MatButtonModule} from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { ClipboardModule} from '@angular/cdk/clipboard';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { NgxPaginationModule } from 'ngx-pagination';
import { ShareFooterModule } from '../share-footer/share-footer.module'

@NgModule({
  declarations: [MyBlueComponent, MyBlueQAComponent, MyBlueStagingComponent, MyBlueProductionComponent],
  imports: [
   
    CommonModule,
    MyBlueRoutingModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatPaginatorModule,
    MatTableModule,
    NgxPaginationModule,
    MatIconModule,
    MatInputModule,
    ClipboardModule,
    MatSnackBarModule,
    ShareFooterModule
  ],
  exports:[
  ],
  providers:[
    DataExchangeService,    
  ]
})
export class MyblueModule { }
