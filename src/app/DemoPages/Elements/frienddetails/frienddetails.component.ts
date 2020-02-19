import { Component, OnInit } from '@angular/core';
import{AuthService} from '../../../auth.service';
import { HttpClient ,HttpParams} from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-frienddetails',
  templateUrl: './frienddetails.component.html',
  styleUrls: ['./frienddetails.component.css']
})
export class FrienddetailsComponent implements OnInit {
  constructor(private _httpclient:HttpClient,private auth:AuthService) { }
  file:string='';
  file1:string='';
  name:string='';
  array:any;
  array1:any;
  array2:any;
  array3:any;

  ngOnInit() {
    const payload = new FormData();
    payload.append('username',localStorage.getItem('frdienddetailsname'));
    this.auth.getdetails(payload).subscribe(res=>{
      console.log(res);
      this.array1=res;
      this.array2=this.array1.data;
      console.log(this.array2)
      this.file1=this.array2[0].file
      this.name=this.array2[0].username;
      console.log(this.file1+"file  is")
      

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
