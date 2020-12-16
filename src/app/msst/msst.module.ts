import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MsstRoutingModule } from './msst-routing.module';
import { MsstComponent } from './msst.component';
import { MsstQAComponent } from './components/msst-qa/msst-qa.component';
import { MsstStagingComponent } from './components/msst-staging/msst-staging.component';
// import { MsstProductionComponent } from './components/msst-production/msst-production.component';

import {MatButtonModule} from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { ClipboardModule} from '@angular/cdk/clipboard';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { DataExchangeService } from '../services/data/data-exchange.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { ShareFooterModule } from '../share-footer/share-footer.module'

@NgModule({
  declarations: [
    MsstComponent,
     MsstQAComponent,
      MsstStagingComponent,
      //  MsstProductionComponent
      ],
  imports: [
    CommonModule,
    MsstRoutingModule,
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
export class MsstModule { }
