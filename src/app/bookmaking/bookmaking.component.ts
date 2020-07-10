import { Component } from '@angular/core';


@Component({
selector:'',
templateUrl:'./bookmaking.component.html',
styleUrls:['../content/css/main.css',
'../content/css/table.css',
]
})


export class BookmakingComponent{
constuctor(){
 console.log("BookmakingComponent Constructor")
}
bookdata = [{
    id:'1',
    eventName:'Balkh Legends v Kabul Zwanan',
    headerName:'BOOK MAKING',
    status:'INACTIVE'
    
 },{
   id:'2',
   eventName:'Kumkhum v Q Wang',
    headerName:'BOOK MAKING',
    status:'INACTIVE'
 },{
    id:'3',
    eventName:'Galle v Dambulla',
    headerName:'BOOK MAKING',
    status:'INACTIVE'
  }]

}