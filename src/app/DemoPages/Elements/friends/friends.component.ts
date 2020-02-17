import { Component, OnInit,AfterViewInit,ViewChild,ElementRef } from '@angular/core';
import{AuthService} from '../../../auth.service';
import { HttpClient ,HttpParams} from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import {  Router } from '@angular/router';
import {MatSnackBar} from '@angular/material';




@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit,AfterViewInit  {
  ngAfterViewInit(): void {
    throw new Error("Method not implemented.");
  }
  @ViewChild('id1') p1:ElementRef;
  @ViewChild('id2') p2:ElementRef;
 array:any;
 array1:any;
 array2:any;
 array3:any;
 array4:any;
 array5:any;
 postid:string='';
 value:string='';
 addfriend={
  id:localStorage.getItem('id')
}

  constructor( private snackbar:MatSnackBar, private _httpclient:HttpClient,private auth:AuthService,private router:Router) { }

  ngOnInit() {
   

    var date=new Date();
    console.log(date);
    
    const payload = new FormData();
    payload.append('requestto',localStorage.getItem('username'));
    console.log(localStorage.getItem('username'))
    this.auth.requestaccepted(payload).subscribe(res=>{
      console.log(res);
      console.log("res is")
      this.array=res;
      this.array1=this.array.data;

    })
    const payload1 = new FormData();
    payload1.append('requestfrom',localStorage.getItem('username'));
    console.log(localStorage.getItem('username'))
    this.auth.requestacceptedfromdata(payload1).subscribe(res=>{
      console.log(res)
      this.array2=res
      this.array3=this.array2.data;
    })
   
    const payload2 = new FormData();
    payload2.append('id',localStorage.getItem('id'));
    console.log(localStorage.getItem('id')+"id is")
    this.auth.getusernames(payload2).subscribe(res=>{
      console.log(res +"is");
        this.array4=res;
      
        this.array5=this.array4.data
        console.log(this.array5)

    })
  }
  viewdetails(selected:any){
    console.log("Selected item Id: ",selected.requestfromname);
    localStorage.setItem('frdienddetailsname',selected.requestfrom)
    console.log(selected.requestfrom+"fromdata")
    this.router.navigate(['/elements/friendsdetails']);
  }
  viewdetails1(selected:any){
    console.log("Selected item Id: ",selected.requestfromname);
    localStorage.setItem('frdienddetailsname',selected.requestto)
    console.log(selected.requestto+"todata")
    this.router.navigate(['/elements/friendsdetails']);
  }
request(){
  this.snackbar.open("Request Sent...","OK");
  
}

//   request( selected:any){
//     const payload = new FormData();
   
//     this.p1.nativeElement.innerHTML = "Requested";
//     this.p1.nativeElement.style.background="green";
//     this.p1.nativeElement.value=this.value;
//     console.log(this.value+"value is");
 
    
   

//     payload.append('requestfrom',localStorage.getItem('username'));
//     //payload.append('requestfromname',localStorage.getItem('username'));
//     payload.append('file',localStorage.getItem('file1'));
//     //console.log(localStorage.getItem('file'))

//     payload.append("requestto", selected.username);
//     payload.append("requesttofile", selected.file);
//     console.log(selected.username)
//     console.log(selected.file+"file is")

//     console.log(localStorage.getItem('username'))
     
  
//       console.log(this.addfriend);
//     this.auth.addfriend(payload).subscribe(res=>{
//       console.log(res);
//     }

//     )

// }
}
