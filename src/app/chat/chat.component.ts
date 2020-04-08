import { Component, OnInit } from '@angular/core';
import{AuthService} from '../auth.service';
import { HttpClient ,HttpParams} from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.sass']
})
export class ChatComponent implements OnInit {
  arr: Array<any>;
  array1:any;

  constructor(private _httpclient:HttpClient,private auth:AuthService){ 
    this.arr = [
      { name: 'Moran', role: 'back' },
      { name: 'Alain', role: 'front' },
      { name: 'Tony', role: 'back' },
      { name: 'Mike', role: 'back' },
      { name: 'Abo', role: 'back' },
      { name: 'Toni', role: 'back' },
    ]
  }
  

 

  ngOnInit() {
  }
  exceldata(){
    this._httpclient.get('http://localhost:3001/exportdata').subscribe(res=>{
      console.log(res);
      this.array1=res
      const fileName = 'test.xlsx';
      console.log(this.array1);
      const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.array1);
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'test');
  
      XLSX.writeFile(wb, fileName);
    })
  }

  exportToExcel($event) {
	  const fileName = 'test.xlsx';

		const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.array1);
		const wb: XLSX.WorkBook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(wb, ws, 'test');

		XLSX.writeFile(wb, fileName);
  }

}
