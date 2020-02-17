import { Component, OnInit } from '@angular/core';
import{AuthService} from '../../../auth.service';
import { HttpClient ,HttpParams} from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2'
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget1password',
  templateUrl: './forget1password.component.html',
  styleUrls: ['./forget1password.component.css']
})
export class Forget1passwordComponent implements OnInit {


  constructor(private _httpclient:HttpClient,private auth:AuthService,private _router:Router){ }
  forgetdata={
    fmail:''
  }

  ngOnInit() {
  }
  forgetpassword(){
    console.log("heloo")
    console.log(this.forgetdata)
    
    const payload = new FormData();
 
    payload.append('fmail',this.forgetdata.fmail);
    this.auth.forgetpassword(payload).subscribe(res=>{
      console.log(res);
      this._router.navigate(['/resetpassword']);
      
      
    })


  }

  

}
