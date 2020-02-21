import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-dialogue',
  templateUrl: './logout-dialogue.component.html',
  styleUrls: ['./logout-dialogue.component.sass']
})
export class LogoutDialogueComponent implements OnInit {
  

  constructor(public dialogRef: MatDialogRef<LogoutDialogueComponent>,private _router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  confirmLogout(){
    this.dialogRef.close("Successfully logout");
    this._router.navigate(['/login'])
  }
}
