import { Component, OnInit } from '@angular/core';
import{AuthService} from '../../../auth.service';
import { HttpClient ,HttpParams} from '@angular/common/http';
import {  Router } from '@angular/router';
import {MatSnackBar, MatBottomSheet} from '@angular/material';
import { ViewDetailsBottomsheetComponent } from 'src/app/DemoPages/Elements/view-details-bottomsheet/view-details-bottomsheet.component';

@Component({
  selector: 'app-friendslist',
  templateUrl: './friendslist.component.html',
  styleUrls: ['./friendslist.component.css']
})
export class FriendslistComponent implements OnInit {

  constructor(private bottomSheet: MatBottomSheet, private snackbar:MatSnackBar, private _httpclient:HttpClient,private auth:AuthService,private router:Router) { }
 array:any;
 array1:any;
 array2:any;
 array3:any;
 array4:any;
 array5:any;
 postid:string='';
 value:string='';

  ngOnInit() {
    

    const payload = new FormData();
    payload.append('requestto',localStorage.getItem('username'));
    console.log(localStorage.getItem('username'))
    this.auth.requestaccepted(payload).subscribe(res=>{
      console.log(res);
      console.log("res is")
      this.array=res;
      this.array1=this.array.data;
      console.log(this.array1)

    })
    const payload1 = new FormData();
    payload1.append('requestfrom',localStorage.getItem('username'));
    console.log(localStorage.getItem('username'))
    this.auth.requestacceptedfromdata(payload1).subscribe(res=>{
      console.log(res)
      this.array2=res
      console.log(this.array2+"array2 is")
      this.array3=this.array2.data;
    
    })
   
  }
  viewdetails(selected:any){
    console.log("Selected item Id: ",selected.requestfromname);
    localStorage.setItem('frdienddetailsname',selected.requestfrom)
    console.log(selected.requestfrom+"fromdata")
     this.router.navigate(['/elements/viewdetails1']);
    // this.bottomSheet.open(ViewDetailsBottomsheetComponent);
  }
  viewdetails1(selected:any){
    console.log("Selected item Id: ",selected.requestfromname);
    localStorage.setItem('frdienddetailsname',selected.requestto)
    console.log(selected.requestto+"todata")
    // this.bottomSheet.open(ViewDetailsBottomsheetComponent);
      this.router.navigate(['/elements/viewdetails1']);
  }

}
