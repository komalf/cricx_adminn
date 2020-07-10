import { Component } from '@angular/core';

@Component({
 selector:'',
 templateUrl:'./commentary.component.html',
 styleUrls:['../content/css/main.css',
'../content/css/table.css',
]


})
export class CommentaryComponent{
constructor(){
    console.log("CommentaryComponent Constructor")
}
commentrydata = [{
    id:'1',
    Sport:'Cricket',
    Commentry:'4',
    showtext:'adff'
    
    },{
    id:'2',  
    Sport:'Soccer',
    Commentry:'3',
    showtext:'xyz'
    
    },{
    id:'3',
    Sport:'Tennis',
    Commentry:'5',
    showtext:'pqr'
    
    }]


}