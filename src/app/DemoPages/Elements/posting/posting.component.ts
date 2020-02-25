import { Component, OnInit } from '@angular/core';
import{AuthService} from '../../../auth.service';
import { HttpClient ,HttpParams} from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-posting',
  templateUrl: './posting.component.html',
  styleUrls: ['./posting.component.css']
})
export class PostingComponent implements OnInit {
  array:any;
   srcResult: any;
    status:string="posting Successfull"
  postingData={
    comment:'',
    username:localStorage.getItem('username')
 }
 public emoployeeData: FormGroup
public filesToUpload: Array<File> = [];

fileChangeEvent(fileInput: any) {
  this.filesToUpload = <Array<File>>fileInput.target.files;
  // this.fileName = this.filesToUpload[0].name;
}

  constructor(private _httpclient:HttpClient,private auth:AuthService){ }
 onFileSelected() {
      const inputNode: any = document.querySelector('#file');
    
      if (typeof (FileReader) !== 'undefined') {
        const reader = new FileReader();
    
        reader.onload = (e: any) => {
          this.srcResult = e.target.result;
        };
    
        reader.readAsArrayBuffer(inputNode.files[0]);
      }
    }
  ngOnInit() {

   
  }

  postingdata(){
    const payload = new FormData();
    payload.append('file', this.filesToUpload[0], this.filesToUpload[0].name);
    console.log(File+" file")
    payload.append('username',this.postingData.username);
    payload.append('comment',this.postingData.comment);
    payload.append('file1',localStorage.getItem('file1'));

    console.log(this.postingData);

    this.auth.posting(payload)
    .subscribe(
      res=>{
        console.log("res is")
        console.log(res)
        this.array=res;
        console.log(this.array.Status);

        // if(this.status==this.array.Status){

        // }
        Swal.fire('','Posting Successful','success')


      }
    )

    
  }

}
