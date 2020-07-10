import { Component } from '@angular/core';


@Component({
selector:'',
templateUrl:'./delay.component.html',
styleUrls:['../content/css/main.css',
'../content/css/table.css',
]


})

export class DelayComponent{
  IsVisible:boolean =true;
constructor(){
   console.log("DelayComponent Constructor") 
}
ShowHide(){
this.IsVisible = this.IsVisible ? false :true ;

}
Delaydata = [{
   Category:'Tennis',
   Seconds:'5', 
 },{
   Category:'Supemaster 1',
   Seconds:'3',
 },{
   Category:'Sri Lanka v England (2nd Test)',
   Seconds:'2',
  }]
}