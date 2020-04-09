import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css']
})
export class MessengerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  
   

  }
  test(){
    document.getElementById('reg').addEventListener('submit',function(event){
      console.log("inside");
      event.preventDefault();
      // let user = document.getElementById('user').value;
      // console.log(user+"is")
      // window.location.href = `http://localhost:4200/elements/messenger2?user=${user}`;
      // console.log(user);
  })
  }

}
