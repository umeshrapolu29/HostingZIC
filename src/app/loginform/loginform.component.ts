import { Component, OnInit, ɵConsole } from '@angular/core';
import{AuthService} from '../auth.service';
import { HttpClient ,HttpParams} from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';


@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  logindata={
    username:'',
    password:''
  }
  array:any;
  status:string='Login Successfull';

  constructor(private _httpclient:HttpClient,private auth:AuthService ,private _router:Router) { }

  ngOnInit() {
  }
  // login(){
  //   console.log(this.logindata.username)
  //   localStorage.setItem('username',this.logindata.username)
  //   this.auth.login(this.logindata)
  //   .subscribe(
  //     res=>{
  //       console.log(res)
  //       this.array=res;

  //       console.log(this.array.status);
  //       console.log(this.status);

  //       if(this.status==this.array.status)
  //       {
  //         // Swal.fire('','Login Successful','success')
  //         this._router.navigate(['/elements/homepage'])
  //       }
  //       else{
  //         Swal.fire('',' Invalid Credential','error')
  //         this._router.navigate(['/login'])
  //       }

  //     }
  //   )
  // }
  login(){
    console.log(this.logindata.username +"username is") 
    localStorage.setItem('username',this.logindata.username)
    this.auth.login(this.logindata)
    .subscribe(
      res=>{
        console.log(res)
        this.array=res;
     

      
        console.log(this.status);

        if(this.status==this.array.msg)
        {   
          //  Swal.fire('','Login Successful','success')
          localStorage.setItem('file1',this.array.data.file)
          localStorage.setItem('id',this.array.data._id)

          console.log(this.array.data.file);
      
          this._router.navigate(['/elements/homepage'])
         

          console.log("successfull")
        }
            else{
          Swal.fire('',' Invalid Credential','error')
          console.log("invalid credentials")
          this._router.navigate(['/login'])
            }

      }
    )
  }

}
