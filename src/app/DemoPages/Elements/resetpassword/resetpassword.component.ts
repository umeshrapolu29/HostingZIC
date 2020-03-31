import { Component, OnInit } from '@angular/core';
import{AuthService} from '../../../auth.service';
import { HttpClient ,HttpParams} from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.sass']
})
export class ResetpasswordComponent implements OnInit {
  logindata={
  
    token:'',
    updatepassword:''
  }
  array:any;

  constructor(private _httpclient:HttpClient,private auth:AuthService,private _router:Router){ }

  ngOnInit() {
  }
  resetpassword(){
    const payload = new FormData();
    payload.append('fmail',localStorage.getItem('fmail'));
    payload.append('token1',this.logindata.token);
    payload.append('updatepassword',this.logindata.updatepassword);
    console.log(payload+"payload")
    this.auth.resetpassword(payload).subscribe(res=>{
      console.log(res)
      this.array=res;
      console.log(this.array.data.n)

      if(this.array.data.n==1){
      Swal.fire('',this.array.msg,'success')
      this._router.navigate(['/login']);
      }
      else{
        Swal.fire('',' Invalid Token','error')
      }

    })
  }

}
