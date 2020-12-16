import { Component, OnInit, Inject, resolveForwardRef } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogClose } from '@angular/material/dialog';

import { ExcelService } from '../../services/data/excel.service';
import { Observable, of } from 'rxjs';
import { SampleUser } from 'src/app/model/SampleUser';
import { DataExchangeService } from 'src/app/services/data/data-exchange.service';

import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-test-data',
  templateUrl: './add-test-data.component.html',
  styleUrls: ['./add-test-data.component.scss']
})

export class AddTestDataComponent implements OnInit {

  importedData: [][];
  sampleUserArr: SampleUser[] = [];

  application: string;
  environment: string;

  warning: string = '';
  invalidValuePresent: boolean;

  dataExcel: any = [{
    username: '',
    password: '',
    feature: ''
  }];

  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: DialogData, private excelService: ExcelService, private dataioService: DataExchangeService, private _snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.sampleUserArr = [];
    this.application = this.data.application;
    this.environment = this.data.environment;
    this.invalidValuePresent = false;
  }

  onClose() {
    this.dialog.closeAll();
  }

  downloadTemplate(): void {
    this.excelService.exportAsExcelFile(this.dataExcel, 'template_TestAccountCenter');
  }

  onImportChange(event: any) {
    this.warning = '';
    this.invalidValuePresent=false;
    if (this.validateXLSX(event.target.files[0].name)) {
      this.excelService.importExcelFile(event);
      setTimeout(() => {
        this.importedData = this.excelService.getImportedData();
        this.splitData(this.importedData);
      }, 1000);
    }
    else this.warning = 'Please import a \'.xlsx\' file';
  }

  validateXLSX(fileName: string): boolean {
    if (fileName.substring(fileName.lastIndexOf('.') + 1))
      return true;
    else false;
  }

  validateTemplate(data): boolean {
    if (data[0][0] == 'username' &&
      data[0][1] == 'password' &&
      data[0][2] == 'feature') return true;
    else return false;
  }

  splitData(importedData) {
    var username: string;
    var password: string;
    var feature: string;
    //console.log(importedData);
    
    if (this.validateTemplate(importedData)) {
      
      for (var i = 1; i < importedData.length; i++) {
        for (var j = 0; j < 3; j++) {
          if (j == 0)
            username = importedData[i][j];
          else if (j == 1)
            password = importedData[i][j];
          else feature = importedData[i][j];
        }
        if (password != undefined && username != undefined) {
          username=username.trim();
          password=password.trim();
          feature=feature.trim();
          // console.log(username+""+username.length+""+password.length);
            
          if (password.length > 0 && password.length <=50 && username.length > 0 && username.length <=50){//&& feature.length <=50) {
            let su: SampleUser = new SampleUser(i, username, password, feature);
            this.sampleUserArr.push(su);
          }
          else this.invalidValuePresent=true;
        }else if(password != undefined && username == undefined){ 
          this.invalidValuePresent=true;
        }
        else if(username != undefined && password == undefined){ 
          this.invalidValuePresent=true;
        }
      }
    }
    else this.warning = 'Please import excel with above mentioned headers';
  }

  onImportSubmit() {
    this.dataioService.postData(this.sampleUserArr, this.data.application, this.data.environment).subscribe();
    this._snackbar.open("Data is added in the background. Please refresh if all the values are not visible", "Dismiss",
      {
        duration: 3000,
      });
    this.dialog.closeAll();
  }
}

export interface DialogData {
  application: 'myblue' | 'msst';
  environment: 'qa' | 'staging' | 'production';
}