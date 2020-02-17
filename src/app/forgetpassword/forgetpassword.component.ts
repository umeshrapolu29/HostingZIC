import { Component, OnInit } from '@angular/core';
import{AuthService} from '../../../auth.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  constructor() { }
  forgetdata={
    fmail:''
  }

  ngOnInit() {
  }
  forgetpassword(){

  }

}
