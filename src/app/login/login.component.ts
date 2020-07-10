import { Component, OnInit } from '@angular/core';



@Component({
  selector:'app-login',
  templateUrl:'./login.component.html'
})

export class LoginComponent implements OnInit{
    ngOnInit():void{
        localStorage.clear();
        }
        private _loginservice;
        output:any;
        actionButtonLabel: string = 'Retry';
        action: boolean = false;
        setAutoHide: boolean = true;
        autoHide: number = 2000;
        // verticalPosition: MatSnachbar = 'top';
        // horizontalPosition: MatSnackBarHorizontalPosition = 'center';
    constructor(){
  console.log("LoginComponent Constructor")

    }




}