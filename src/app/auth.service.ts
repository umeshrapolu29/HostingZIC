import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
    private _router: Router) { }

    // register(registerdata){
    //   const headers=new HttpHeaders()

    //    return this.http.post<{sucess: boolean, msg: string, data: {}}>("http://localhost:4000/admin/adduser",registerdata,
    //    {headers:headers})
    // }
    Accesscontrol(accessdata){
      const headers=new HttpHeaders()
       return this.http.post<{sucess: boolean, msg: string, data: {}}>("http://localhost:4000/access/resumeorpausequeue",accessdata,
       {headers:headers})
    }
    register(registerdata){
      const headers=new HttpHeaders()
      console.log(registerdata);

       return this.http.post("https://backendzic.herokuapp.com/user/userregister",registerdata,
       {headers:headers})
    }
    login(logindata){
      const headers=new HttpHeaders()
      console.log(logindata);

       return this.http.post("https://backendzic.herokuapp.com/user/login",logindata,
       {headers:headers})
    }
    getusernames(logindata){
      const headers=new HttpHeaders()
      console.log(logindata);

       return this.http.post("https://backendzic.herokuapp.com/user/usernames",logindata,
       {headers:headers})
    }
    posting(postingdata){
      const headers=new HttpHeaders()
      console.log(postingdata);

       return this.http.post("https://backendzic.herokuapp.com/user/posting",postingdata,
       {headers:headers})
    }
    getdetails(getdata){
      const headers=new HttpHeaders()
      console.log(getdata);

       return this.http.post("https://backendzic.herokuapp.com/user/getdetails",getdata,
       {headers:headers})
    }
    postlikes(getdata){
      const headers=new HttpHeaders()
      console.log(getdata);

       return this.http.post("https://backendzic.herokuapp.com/user/countlikes",getdata,
       {headers:headers})
    }
    addfriend(getdata){
      const headers=new HttpHeaders()
      console.log(getdata);

       return this.http.post("https://backendzic.herokuapp.com/user/postrequest",getdata,
       {headers:headers})
    }
    friendrequest(getdata){
      const headers=new HttpHeaders()
      console.log(getdata);

       return this.http.post("http://localhost:3001/user/getrequest",getdata,
       {headers:headers})
    }
    requeststatus(getdata){
      const headers=new HttpHeaders()
      console.log(getdata);

       return this.http.post("https://backendzic.herokuapp.com/user/getrequestaccepted",getdata,
       {headers:headers})
    }
    requestaccepted(getdata){
      const headers=new HttpHeaders()
      console.log(getdata);

       return this.http.post("https://backendzic.herokuapp.com/user/requestaccepteddata",getdata,
       {headers:headers})
    }
    requestdeleted(getdata){
      const headers=new HttpHeaders()
      console.log(getdata);

       return this.http.post("https://backendzic.herokuapp.com/user/getrequestdelete",getdata,
       {headers:headers})
    }
    friendsdetails(getdata){
      const headers=new HttpHeaders()
      console.log(getdata);

       return this.http.post("https://backendzic.herokuapp.com/user/getpostdetails",getdata,
       {headers:headers})
    }
    requestacceptedfromdata(getdata){
      const headers=new HttpHeaders()

      return  this.http.post("https://backendzic.herokuapp.com/user/requestaccepetedfromdata",getdata,
      {headers:headers})
    }
    forgetpassword(getdata){
      const headers=new HttpHeaders()

      return this.http.post("https://backendzic.herokuapp.com/user/forgotpassword",getdata,
      {headers:headers})
    }
    resetpassword(getdata){
      const headers=new HttpHeaders()

      return this.http.post("https://backendzic.herokuapp.com/user/resetpassword",getdata,
      {headers:headers})
    }
    commentonpost(getdata){
      const headers=new HttpHeaders()

      return this.http.post("https://backendzic.herokuapp.com/user/retrivecommentonpost",getdata,
      {headers:headers})
    }
    commentonpostdata(getdata){
      const headers=new HttpHeaders()

      return this.http.post("https://backendzic.herokuapp.com/user/commentonpost",getdata,
      {headers:headers})
    }
    
    
  }
