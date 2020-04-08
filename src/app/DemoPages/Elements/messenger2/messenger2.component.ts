import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messenger2',
  templateUrl: './messenger2.component.html',
  styleUrls: ['./messenger2.component.css']
})
export class Messenger2Component implements OnInit {

  constructor() { }
  true:any;

  ngOnInit() {
 
    
    (function () {
        var element = function (id) {
            return document.getElementById(id);
        }

        // Get Elements
        var status = element('status');
        var messages = element('messages');
        var textarea = element('textarea');
        var username = element('username');
        var clearBtn = element('clear');
        console.log(messages,textarea+"values are")
       

        // sessionStorage.setItem('init', true)

        let urlParam = new URLSearchParams(window.location.search);
        let user = urlParam.get('user')
        username.textContent = user;


        // let friendsList = document.querySelectorAll('a');



        // Set default status
        // var statusDefault = status.textContent;

        // var setStatus = function (s) {
        //     // Set status
        //     status.textContent = s;

        //     if (s !== statusDefault) {
        //         var delay = setTimeout(function () {
        //             setStatus(statusDefault);
        //         }, 4000);
        //     }
        // }



        // Connect to socket.io
        var socket = io.connect('http://localhost:4000', { query: `user=${user}` });
        console.log(socket+"socket is")

        // Check for connection
        if (socket !== undefined) {
            console.log('Connected to socket111...');
            messages.innerHTML = ''
            // Handle Output
            socket.on('output', function (data) {
                console.log(data+"data is");
                if (data.length) {
                    for (var x = 0; x < data.length; x++) {
                        // Build out message div
                        var message = document.createElement('div');
                        message.setAttribute('class', 'chat-message');

                        message.textContent = data[x].name + ": " + data[x].message;
                        messages.appendChild(message);
                        messages.insertBefore(message, messages.lastChild);
                    }
                }
                // sessionStorage.setItem('init', false)
            });

            // experiment to send data


            //Get Status From Server
            // socket.on('status', function (data) {
            //     // get message status
            //     setStatus((typeof data === 'object') ? data.message : data);

            //     // If status is clear, clear text
            //     if (data.clear) {
            //         textarea.value = '';
            //     }
            // });

            // Handle Input
            textarea.addEventListener('keydown', function (event) {

                // if (event.which === 13 && event.shiftKey == false) {
                //     // Emit to server input
                //     socket.emit('input', {
                //         user: user,
                //         friend: localStorage.getItem('friend'),
                //         message: textarea.value
                //     });
                //     event.preventDefault();
                //     textarea.value = '';
                //     messages.scrollTo = messages.scrollHeight;
                // }
            })

            // Handle Chat Clear
            clearBtn.addEventListener('click', function () {
                socket.emit('clear');
            });

            // Clear Message
            socket.on('cleared', function () {
                messages.textContent = '';
            });



            // friendsList.forEach(function (friend) {
            //     friend.addEventListener('click', function (event) {
            //         event.preventDefault();
            //         let friend = event.target.dataset.friend;
            //         localStorage.setItem('friend',friend)
            //         document.getElementById('online').textContent = friend;
            //         socket.emit('join', { user: user, friend: friend })
            //     })
            // })
           
            // socket.on('load', function (data) {
            //     console.log(data)
            //     if (data.length) {
            //         for (var x = 0; x < data.length; x++) {
            //             // Build out message div
            //             var message = document.createElement('div');
            //             message.setAttribute('class', 'chat-message');

            //             message.textContent = data[x].name + ": " + data[x].message;
            //             messages.appendChild(message);
            //             messages.insertBefore(message, messages.lastChild);
            //         }
            //     }
            // })
        }
        // socket.on('message',function(data){
        //     console.log(data)

        //     var message = document.createElement('div');
        //      message.setAttribute('class', 'chat-message');
        //      message.textContent = data.user + ": " + data.message;
        //      messages.appendChild(message);
        //      messages.insertBefore(message, messages.lastChild);
            
        // })
    })();
  //   (function(){
  //     var element = function(id){
  //         return document.getElementById(id);
  //     }

  //     // Get Elements
  //     var status = element('status');
  //     var messages = element('messages');
  //     var textarea = element('textarea');
  //     var username = element('username');
  //     var clearBtn = element('clear');

  //     // Set default status
  //     // var statusDefault = status.textContent;
  //     //        let urlParam = new URLSearchParams(window.location.search);
  //     //    let user = urlParam.get('user')
  //     //    username.textContent = user;

  //     // var setStatus = function(s){
  //     //     // Set status
  //     //     status.textContent = s;

  //     //     if(s !== statusDefault){
  //     //         var delay = setTimeout(function(){
  //     //             setStatus(statusDefault);
  //     //         }, 4000);
  //     //     }
  //     // }

  //     // Connect to socket.io
  //     var socket = io.connect('http://localhost:4000');

  //     // Check for connection
  //     if(socket !== undefined){
  //         console.log('Connected to socket...');

  //         // // Handle Output
  //         // socket.on('output', function(data){
  //         //     //console.log(data);
  //         //     if(data.length){
  //         //         for(var x = 0;x < data.length;x++){
  //         //             // Build out message div
  //         //             var message = document.createElement('div');
  //         //             message.setAttribute('class', 'chat-message');
  //         //             message.textContent = data[x].name+": "+data[x].message;
  //         //             messages.appendChild(message);
  //         //             messages.insertBefore(message, messages.firstChild);
  //         //         }
  //         //     }
  //         // });

  //         // // Get Status From Server
  //         // socket.on('status', function(data){
  //         //     // get message status
  //         //     setStatus((typeof data === 'object')? data.message : data);

  //         //     // If status is clear, clear text
  //         //     if(data.clear){
  //         //         textarea.value = '';
  //         //     }
  //         // });

  //         // // Handle Input
  //         // textarea.addEventListener('keydown', function(event){
  //         //     if(event.which === 13 && event.shiftKey == false){
  //         //         // Emit to server input
  //         //         socket.emit('input', {
  //         //             name:username.value,
  //         //             message:textarea.value
  //         //         });

  //         //         event.preventDefault();
  //         //     }
  //         // })

  //         // // Handle Chat Clear
  //         // clearBtn.addEventListener('click', function(){
  //         //     socket.emit('clear');
  //         // });

  //         // // Clear Message
  //         // socket.on('cleared', function(){
  //         //     messages.textContent = '';
  //         // });
  //     }

  // })

  }
}
