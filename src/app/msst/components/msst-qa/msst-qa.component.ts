import { Component, OnInit } from '@angular/core';
import { SampleUser } from 'src/app/model/SampleUser';
import { DataExchangeService } from 'src/app/services/data/data-exchange.service';
import { AddTestDataComponent } from 'src/app/dialog-pages/add-test-data/add-test-data.component';
import { MatDialog } from '@angular/material/dialog';
import { PaginationInstance } from 'ngx-pagination';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-msst-qa',
  templateUrl: './msst-qa.component.html',
  styleUrls: ['./msst-qa.component.scss']
})
export class MsstQAComponent implements OnInit {

 
  hideSampleData=true;
  importedCreds:SampleUser[]=[];

  application:string="msst";
  environment:string="qa";
  sampleBtn:string="View Test Accounts";

  hidePwd:boolean[]=[];
   /* Pagination Variables */
  page:number=1;
  itemsPerPage:number=10;

  featureFilter:string;
  filteredList:SampleUser[];
  filter:string="";


  constructor(private dataio:DataExchangeService,private dialog:MatDialog,private _snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.dataio.getData(this.application,this.environment).subscribe(response=>
      this.onSuccessfullResponse(response))
  }
  onClick(){
    window.open("https://staging.member50.bluecrossma.com/login");
  }
  onClickSample(){
    this.hideSampleData=!this.hideSampleData;
    this.sampleBtn=this.hideSampleData?"View Test Accounts":"Hide Test Accounts";
  }
  onSuccessfullResponse(response){
    this.importedCreds=response;
    this.filteredList=this.importedCreds;
    // if(this.importedCreds.length>0){
    // for(let i=0;i<this.importedCreds.length;i++)
    //   this.hidePwd[this.importedCreds[i].srno]=false;
    // }
  }

  openDialog(){
    // const dialogConfig=new MatDialogConfig();
    // dialogConfig.autoFocus=true;
    let dialogRef=this.dialog.open(AddTestDataComponent,{
      data:{
        application:this.application,
        environment:this.environment,
      },
      autoFocus:true,
      restoreFocus:true,
      disableClose:true,
      minHeight:'70%',
      minWidth:'50%',
      width:'50%',
    });
    dialogRef.afterClosed().subscribe(d=>{
      setTimeout(() => {
        this.dataio.getData(this.application,this.environment)
          .subscribe(response=>this.onSuccessfullResponse(response));
        this.hideSampleData=false;
      }, 2000);
    });
  }

  onFeatureFilter(filter:string){
    this.page=1;
    this.filter=filter;
    if(this.filter==""){
      this.filteredList=this.importedCreds;
    }
    else{
      this.filteredList=[];
      for(let i of this.importedCreds){
        if(i.feature!=null){
           if(i.feature.toLowerCase().search(filter.toLowerCase())>-1){
          this.filteredList.push(i);
           }
        }
      }
    }
  }

  copyToast(){
    this._snackbar.open('Copied to Clipboard','Dismiss',
      {
        duration:2000,
      }
      );
  }
}