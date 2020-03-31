import { Component, OnInit } from '@angular/core';
import{AuthService} from '../../../auth.service';

@Component({
  selector: 'app-viewdetails1',
  templateUrl: './viewdetails1.component.html',
  styleUrls: ['./viewdetails1.component.sass']
})
export class Viewdetails1Component implements OnInit {

  constructor(private auth:AuthService) { }
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

    const payload1 = new FormData();
    payload1.append('username',localStorage.getItem('frdienddetailsname'));

    console.log(localStorage.getItem('frdienddetailsname')+"photos of username")
    this.auth.friendsdetails(payload1).subscribe(res=>{
      console.log(res );
      this.array=res;
      this.array1=this.array.data
      console.log(this.array1);

      // console.log(this.array[0].likes +"likes");
      // console.log(this.array[0].file +"likes");
   
    
    })
  }

  }


