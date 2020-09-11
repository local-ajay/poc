import { Component, OnInit } from '@angular/core';
import { SampleUser } from 'src/app/model/SampleUser';
import { DataExchangeService } from 'src/app/services/data/data-exchange.service';
import { MatDialog } from '@angular/material/dialog';
import { AddTestDataComponent } from 'src/app/dialog-pages/add-test-data/add-test-data.component';
import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-myblue-production',
  templateUrl: './myblue-production.component.html',
  styleUrls: ['./myblue-production.component.scss']
})
export class MyBlueProductionComponent implements OnInit {
  hideSampleData=true;
  importedCreds:SampleUser[]=[];

  application:string="myblue";
  environment:string="production";

  
  sampleBtn:string="View Test Accounts";

 /* Pagination Variables */
  public filter: string = '';
    public maxSize: number = 7;
    public directionLinks: boolean = true;
    public autoHide: boolean = true;
    public responsive: boolean = true;
    public config: PaginationInstance = {
        id: 'pagination',
        itemsPerPage: 5,
        currentPage: 1
    };
    public labels: any = {
        previousLabel: 'Previous',
        nextLabel: 'Next',
        screenReaderPaginationLabel: 'Pagination',
        screenReaderPageLabel: 'page',
        screenReaderCurrentLabel: `You're on page`
    };

  constructor(private dataio:DataExchangeService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.dataio.getData(this.application,this.environment).subscribe(response=>
      this.onSuccessfullResponse(response)
    );
    
  }
  onClick(){
    window.open("https://www.bing.com/");
  }
  onClickSample(){
    this.hideSampleData=!this.hideSampleData;
    this.sampleBtn=this.hideSampleData?"View Test Accounts":"Hide Test Accounts";
  }
  onSuccessfullResponse(response:SampleUser[]){
    this.importedCreds=response;
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
