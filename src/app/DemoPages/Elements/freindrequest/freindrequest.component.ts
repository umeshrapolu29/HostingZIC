import { Component, OnInit ,AfterViewInit,ViewChild,ElementRef} from '@angular/core';
import{AuthService} from '../../../auth.service';
import { HttpClient ,HttpParams} from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-freindrequest',
  templateUrl: './freindrequest.component.html',
  styleUrls: ['./freindrequest.component.css']
})
export class FreindrequestComponent implements OnInit,AfterViewInit {
  @ViewChild('id1') p1:ElementRef;
  @ViewChild('id2') p2:ElementRef;
 array:any;
 array1:any;
  constructor(private _httpclient:HttpClient,private auth:AuthService){ }

  ngOnInit() {
    const payload = new FormData();
    payload.append('requestto',localStorage.getItem('username'));
    console.log(localStorage.getItem('username')+"is")

    this.auth.friendrequest(payload).subscribe(res=>{
      console.log(res)

      this.array=res;
      this.array1=this.array.data
     console.log(this.array1);
     console.log("inside request");

      console.log(this.array1.data[0].requestfrom)


    })
  }
  ngAfterViewInit(){
    console.log(this.p1.nativeElement );
    this.p1.nativeElement.style.color='red';
  }
  requeststatus(selected:any){
    const payload = new FormData();
    this.p1.nativeElement.innerHTML = "Confirmed";
    this.p1.nativeElement.style.background="green";
     this.p2.nativeElement.disabled = true;;

    console.log("requestfromname: ", selected._id);
    //payload.append('requestto',localStorage.getItem('username'));
    payload.append('id',selected._id);
    this.auth.requeststatus(payload).subscribe(res=>{
      console.log(res);
    })

  }
  requeststatusdelete(selected:any){
    const payload = new FormData();
    this.p2.nativeElement.innerHTML = "Deleted";
    this.p2.nativeElement.style.background="red";
     this.p1.nativeElement.disabled = true;;

    console.log("requestfromname: ", selected._id);
    payload.append('requestto',localStorage.getItem('username'));
    payload.append('id',selected._id);
    console.log(selected._id)
    this.auth.requestdeleted(payload).subscribe(res=>{
      console.log(res);
    })
  }

}
