import {Component,OnInit} from '@angular/core';
import {select} from '@angular-redux/store';
import {Observable} from 'rxjs';
import {ConfigActions} from '../../ThemeOptions/store/config.actions';
import {ThemeOptions} from '../../theme-options';
import {animate, query, style, transition, trigger} from '@angular/animations';
import {  Router } from '@angular/router';
import { MatBottomSheet, MatDialog, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';
// import { ToBottomSheetComponent } from 'src/app/to-bottom-sheet/to-bottom-sheet.component';
// import { MessageBottomSheetComponent } from 'src/app/message-bottom-sheet/message-bottom-sheet.component';
// import { LogoutDialogueComponent } from 'src/app/logout-dialogue/logout-dialogue.component';


@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css'],
  animations: [

    trigger('architectUIAnimation', [
      transition('* <=> *', [
        query(':enter, :leave', [
          style({
            opacity: 0,
            display: 'flex',
            flex: '1',
            transform: 'translateY(-20px)',
            flexDirection: 'column'

          }),
        ]),
        query(':enter', [
          animate('600ms ease', style({opacity: 1, transform: 'translateY(0)'})),
        ]),

        query(':leave', [
          animate('600ms ease', style({opacity: 0, transform: 'translateY(-20px)'})),
         ], { optional: true })
      ]),
    ])
  ]
})

export class BaseLayoutComponent implements OnInit{  

  name = 'Angular';
  time = new Date();
  timer;
 
  ngOnInit() {
   
    this.timer = setInterval(() => {
      this.time = new Date();
    }, 1000);
  }
  ngOnDestroy(){
    clearInterval(this.timer);
  }

  @select('config') public config$: Observable<any>;

  constructor( public dialog: MatDialog, private bottomSheet:MatBottomSheet, public globals: ThemeOptions, public configActions: ConfigActions,private _router: Router) {
  }
  // openBottomSheet() {
  //   this.bottomSheet.open(ToBottomSheetComponent);
  // }
  // openMessageBottomSheet(){
  //   this.bottomSheet.open(MessageBottomSheetComponent);
  // }
  toggleSidebarMobile() {
    this.globals.toggleSidebarMobile = !this.globals.toggleSidebarMobile;
  }
  // logoutUser(){
  //   let dialogRef = this.dialog.open(LogoutDialogueComponent, {
      
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
      
  //   });
  
  // }
  
  logoutUser(){
    this._router.navigate(['/login']);
  }
  
  
}



