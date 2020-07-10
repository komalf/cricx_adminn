import { Component } from '@angular/core';


@Component({
 selector:'',
 templateUrl:'./control.component.html',
 styleUrls:['../content/css/main.css',
'../content/css/table.css',
]

})

export class ControlComponent{
IsVisible=false;
myvalue=false;
consructor(){
 console.log("ControlComponent Constructor")
}

ShowHide(){
    this.IsVisible = this.IsVisible ? false : true;
}
showAlert(){
     this.myvalue = this.myvalue ? false : true;
}

plus5=true;
myrow5=false;
minus5 =false;
showRow5(num){
 this.myrow5 =this.myrow5 ? false :true;
 if(num == 1){
     this.minus5 = !this.minus5;
     this.plus5 = !this.plus5;
 }
 else{
     this.minus5 = !this.minus5;
     this.plus5 = !this.plus5;
 }
}
plus4=true;
myrow4=false;
minus4=false;
showRow4(num){
 this.myrow4 =this.myrow4 ? false :true;
 if(num == 1){
     this.minus4 = !this.minus4;
     this.plus4 = !this.plus4;
 }
 else{
     this.minus4 = !this.minus4;
     this.plus4 = !this.plus4;
 }
}

plus3=true;
myrow3=false;
minus3=false;
showRow3(num){
 this.myrow3 =this.myrow3 ? false :true;
 if(num == 1){
     this.minus3 = !this.minus3;
     this.plus3 = !this.plus3;
 }
 else{
     this.minus3 = !this.minus3;
     this.plus3 = !this.plus3;
 }
}
plus2=true;
myrow2=false;
minus2=false;
showRow2(num){
 this.myrow2 =this.myrow2 ? false :true;
 if(num == 1){
     this.minus2 = !this.minus2;
     this.plus2 = !this.plus2;
 }
 else{
     this.minus2 = !this.minus2;
     this.plus2 = !this.plus2;
 }
}

plus=true;
myrow1=false;
minus=false;
showRow1(num){
 this.myrow1 =this.myrow1 ? false :true;
 if(num == 1){
     this.minus = !this.minus;
     this.plus = !this.plus;
 }
 else{
     this.minus = !this.minus;
     this.plus = !this.plus;
 }
}
plus0=true;
myrow=false;
minus0=false;
showRow(num){
 this.myrow =this.myrow ? false :true;
 if(num == 1){
     this.minus0 = !this.minus0;
     this.plus0 = !this.plus0;
 }
 else{
     this.minus0 = !this.minus0;
     this.plus0 = !this.plus0;
 }
}



}