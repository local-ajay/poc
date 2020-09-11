import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { Observable } from 'rxjs';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  public importedData:[][];

  constructor() { }

  public exportAsExcelFile(json:any[],excelFileName:string):void{
    const worksheet:XLSX.WorkSheet=XLSX.utils.json_to_sheet(json);
    const workbook:XLSX.WorkBook={
      Sheets:{
        'data':worksheet
      },
      SheetNames:['data']
    };
    const excelBuffer:any=XLSX.write(workbook,{
      bookType:'xlsx',
      type:'array'
    });
    this.saveAsExcelFile(excelBuffer,excelFileName);
  }
  private saveAsExcelFile(buffer:any,fileName:string):void{
    const data:Blob=new Blob(
      [buffer],
      {
        type:EXCEL_TYPE
      }
    );
    FileSaver.saveAs(data,fileName+EXCEL_EXTENSION);
  }



  public importExcelFile(event:any){
    const target:DataTransfer=<DataTransfer>(event.target);

    const reader:FileReader=new FileReader();

    reader.onload = (e:any)=>{
      const bstr:string=e.target.result;
      const workbook:XLSX.WorkBook=XLSX.read(bstr,{type:'binary'});
      const worksheetname:string=workbook.SheetNames[0];
      const worksheet:XLSX.WorkSheet=workbook.Sheets[worksheetname];
      
      this.importedData=XLSX.utils.sheet_to_json(worksheet,{header:1});
      
    }

    reader.readAsBinaryString(target.files[0]);

  }

  getImportedData():[][]{
    return this.importedData;
  }

  // validateTemplate():boolean{
  //   return;
  // }
}
