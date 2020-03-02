import { Component, OnInit } from '@angular/core';
import{AuthService} from '../../../auth.service';

@Component({
  selector: 'app-view-details-bottomsheet',
  templateUrl: './view-details-bottomsheet.component.html',
  styleUrls: ['./view-details-bottomsheet.component.css']
})
export class ViewDetailsBottomsheetComponent implements OnInit {
  file:string='';
  file1:string='';
  name:string='';
  array:any;
  array1:any;
  array2:any;
  array3:any;

  constructor(private auth:AuthService) { }

  ngOnInit() {
    const payload = new FormData();
    payload.append('username',localStorage.getItem('frdienddetailsname'));
    this.auth.getdetails(payload).subscribe(res=>{
      console.log(res);
      console.log("inside view sidebar")
      this.array1=res;
      this.array2=this.array1.data;
      console.log(this.array2)
      this.file1=this.array2[0].file
      this.name=this.array2[0].username;
      console.log(this.file1+"file  is")
      console.log(this.name+"file  is")
      

    })

    this.auth.friendsdetails(payload).subscribe(res=>{
      console.log(res);
      this.array=res;
      this.array3=this.array.data;
      console.log(this.array3);    
      console.log("details");
    })
  }
}

  


