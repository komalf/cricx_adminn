import { Component } from '@angular/core';

@Component({
selector:'app-midpane',
templateUrl:'./midpane.component.html',
styleUrls:['./content/css/main.css',
'./content/css/all.css']


})

export class MidpaneComponent{
    ptSwitch:boolean =false;
constructor(){
console.log("MidpaneComponent Constructor")
}
On(){
this.ptSwitch =!this.ptSwitch;


}
}