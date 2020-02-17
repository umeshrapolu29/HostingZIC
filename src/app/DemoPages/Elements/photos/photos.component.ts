import { Component, OnInit } from '@angular/core';
import{AuthService} from '../../../auth.service';
import { HttpClient ,HttpParams} from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})




export class PhotosComponent implements OnInit {
  array:any;
  array1:any;
  

  constructor(private _httpclient:HttpClient,private auth:AuthService) { }


  ngOnInit() {
    const payload = new FormData();
    payload.append('username',localStorage.getItem('username'));

    console.log(localStorage.getItem('username')+"photos of username")
    this.auth.friendsdetails(payload).subscribe(res=>{
      console.log(res );
      this.array=res;
      this.array1=this.array.data

      console.log(this.array[0].likes +"likes");
   
    
    })
  }


}
