import { Component, OnInit } from '@angular/core';
import{AuthService} from '../auth.service';
import { HttpClient ,HttpParams} from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent implements OnInit {
  registerData={
    firstname:'',
    lastname:'',
    email:'',
    username:'',
    password:'',
    confirmpassword:''
 }
 ngSubmit:any;

  constructor(private _httpclient:HttpClient,private auth:AuthService) { }

  ngOnInit() {
  }

public emoployeeData: FormGroup
public filesToUpload: Array<File> = [];
fileChangeEvent(fileInput: any) {
  this.filesToUpload = <Array<File>>fileInput.target.files;
  // this.fileName = this.filesToUpload[0].name;
}
// register(){
//     const payload = new FormData();
//     payload.append('file', this.filesToUpload[0], this.filesToUpload[0].name);
//     console.log(File+" file")
//     payload.append('firstname',this.registerData.firstname);
//     payload.append('lastname',this.registerData.lastname);
//     payload.append('email',this.registerData.email);
//     payload.append('username',this.registerData.username);
//     payload.append('password', this.registerData.password);
//     payload.append('confirmpassword', this.registerData.confirmpassword);
    
//     console.log("hello");
//     console.log(this.registerData)
//     this.auth.register(payload)
//     .subscribe(
//       res => {
        
//         console.log("reshello")
//         console.log(res)
//         Swal.fire('','Registration Successful','success')
//       })
  
//   }
register(){
  const payload = new FormData();
  payload.append('file', this.filesToUpload[0], this.filesToUpload[0].name);
  console.log(File+" file")
  payload.append('firstname',this.registerData.firstname);
  payload.append('lastname',this.registerData.lastname);
  payload.append('email',this.registerData.email);
  payload.append('username',this.registerData.username);
  payload.append('password', this.registerData.password);
  payload.append('confirmpassword', this.registerData.confirmpassword);
  
  console.log("hello");
  console.log(this.registerData)
  this.auth.register(payload)
  .subscribe(
    res => {
      
      console.log("reshello")
      console.log(res)
      Swal.fire('','Registration Successful','success')
    })

}
}
