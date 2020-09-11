import { Component, OnInit } from '@angular/core';
import { SampleUser } from 'src/app/model/SampleUser';
import { DataExchangeService } from 'src/app/services/data/data-exchange.service';
import { AddTestDataComponent } from 'src/app/dialog-pages/add-test-data/add-test-data.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-msst-production',
  templateUrl: './msst-production.component.html',
  styleUrls: ['./msst-production.component.scss']
})
export class MsstProductionComponent implements OnInit {
  
  hideSampleData=true;
  importedCreds:SampleUser[]=[];

  application:string="msst";
  environment:string="production";
  sampleBtn: string="View Test Accounts";

  constructor(private dataio:DataExchangeService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.dataio.getData(this.application,this.environment).subscribe(response=>
      this.onSuccessfullResponse(response))
  }
  onSuccessfullResponse(response: SampleUser[]): void {
    this.importedCreds=response;
  }
  onClick(){
    window.open("https://www.bing.com/");
  }
  onClickSample(){
    this.hideSampleData=!this.hideSampleData;
    this.sampleBtn=this.hideSampleData?"View Test Accounts":"Hide Test Accounts";
  }
  openDialog(){
    let dialogRef=this.dialog.open(AddTestDataComponent,{
      data:{
        application:this.application,
        environment:this.environment,
      },
      autoFocus:true,
      restoreFocus:true,
      disableClose:true,
      minHeight:'70%',
      minWidth:'70%',
    });
    dialogRef.afterClosed().subscribe(d=>{
      setTimeout(() => {
        this.dataio.getData(this.application,this.environment)
          .subscribe(response=>this.onSuccessfullResponse(response));
        this.hideSampleData=false;
      }, 2000);
    });
  }
}
