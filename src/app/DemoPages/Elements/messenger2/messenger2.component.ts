import { Component, OnInit } from '@angular/core';
import{AuthService} from '../../../auth.service';
import { HttpClient ,HttpParams} from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import {  Router } from '@angular/router';
import { ChatService } from '../../../chat.service';
@Component({
  selector: 'app-messenger2',
  templateUrl: './messenger2.component.html',
  styleUrls: ['./messenger2.component.css']
})
export class Messenger2Component implements OnInit {

  constructor( private auth:AuthService,chatService: ChatService) { }
  true:any;
  array:any;
  array1:any;
  message:String='';
  messagesdisplay:any;
  msginput:any;
  user:any;
  clearBtn:any;
  setStatus:any;
  statusDefault:any;
  status:any;

  socket:any;
  
  msgdata={
    msg:''
  }


  ngOnInit() {

    
    this.messagesdisplay= document.getElementById('messages')
    this.msginput=document.getElementById('textarea')
    this.clearBtn=document.getElementById('clear')
    this.status=document.getElementById('status')

    console.log(this.messagesdisplay+"msgs is")
    this.user = localStorage.getItem('username')
    console.log( this.user+"user name is");
    this.statusDefault = this.status.textContent;
    this.setStatus = function (s) {
        // Set status
        this.status.textContent = s;

        if (s !== this.statusDefault) {
            var delay = setTimeout(function () {
                this.setStatus(this.statusDefault);
            }, 4000);
        }
    }
    

    this.socket=  io.connect('http://localhost:4000', { query: `user=${localStorage.getItem('username')}` });
    if (    this.socket !== undefined) {
        console.log('Connected to socket...');
        
        document.getElementById('messages').innerHTML = ''
        // Handle Output
        this.socket.on('output', function (data) {
            console.log(data+"data is");
            if (data.length) {
                for (var x = 0; x < data.length; x++) {
                    // Build out message div
                    var message = document.createElement('div');
                    message.setAttribute('class', 'chat-message');

                    message.textContent = data[x].name + ": " + data[x].message;
                    document.getElementById('messages').appendChild(message);
                    document.getElementById('messages').insertBefore(message,  document.getElementById('messages').lastChild);
                }
            }
            // sessionStorage.setItem('init', false)
        });

        // experiment to send data


        // Get Status From Server
        // this.socket.on('status', function (data) {
        //     // get message status
        //     setStatus((typeof data === 'object') ? data.message : data);

        //     // If status is clear, clear text
        //     if (data.clear) {
        //         this.msginput.value = '';
        //     }
        // });

        // Handle Input
        // this.msginput.addEventListener('keydown', function (event) {

        //     if (event.which === 13 && event.shiftKey == false) {
        //         // Emit to server input
        //         this.socket.emit('input', {
        //             user: this.user,
        //             friend: localStorage.getItem('friend'),
        //             message: this.msginput.value
        //         });
        //         event.preventDefault();
        //         this.msginput.value = '';
        //         this.messagesdisplay.scrollTo = this.messagesdisplay.scrollHeight;
        //     }
        // })

        // Handle Chat Clear
        this.clearBtn.addEventListener('click', function () {
            this.socket.emit('clear');
        });

        // Clear Message
        this.socket.on('cleared', function () {
            this.messagesdisplay.textContent = '';
        });



        // this.socket.forEach(function (friend) {
        //     friend.addEventListener('click', function (event) {
        //         event.preventDefault();
        //         let friend = event.target.dataset.friend;
        //         localStorage.setItem('friend',friend)
        //         document.getElementById('online').textContent = friend;
        //         this.socket.emit('join', { user: this.user, friend: friend })
        //     })
        // })
       
        this.socket.on('load', function (data) {
            console.log(data)
          
            if (data.length) {
                for (var x = 0; x < data.length; x++) {
                    // Build out message div
                    var message = document.createElement('div');
                    message.setAttribute('class', 'chat-message');

                    message.textContent = data[x].name + ": " + data[x].message;
                    document.getElementById('messages').appendChild(message);
                    document.getElementById('messages').insertBefore(message, document.getElementById('messages').lastChild);
                }
            }
        })
    }


    



    

    const payload2 = new FormData();
    payload2.append('id',localStorage.getItem('id'));
    console.log(localStorage.getItem('id')+"id is")
    this.auth.getusernames(payload2).subscribe(res=>{
      console.log(res +"is");
        this.array=res;
      
        this.array1=this.array.data
        console.log(this.array1)
  
  })
}
logMessageId(el){
    console.log(this.message);
    let messageId = el.getAttribute('data-message-id');
    //let messageId = el.dataset.messageId;
    console.log("Message Id: ", messageId);
    localStorage.setItem('friend',messageId)
    document.getElementById('online').textContent = localStorage.getItem('friend');
    console.log(this.socket+"socket is")
    let friend = localStorage.getItem('friend');

    document.getElementById('online').textContent = friend;
    this.socket.emit('join', { user: this.user, friend: friend })
    document.getElementById('messages').innerHTML = ''
}
sendmessage(){
    // console.log("In side function");
    // console.log(this.msgdata.msg)
    this.socket.emit('input', {
        user: localStorage.getItem('username'),
        friend: localStorage.getItem('friend'),
        message: document.getElementById('textarea').value
    });
    event.preventDefault();
    document.getElementById('textarea').value = '';
    // document.getElementById('messages').scrollTo = document.getElementById('messages').scrollHeight;

}

}
