import { Component } from '@angular/core';

@Component({
selector:'',
templateUrl:'./globalmanage.component.html',
styleUrls:["../content/css/main.css",
"../content/css/table.css"]

})

export class GlobalManagementComponent{
constructor(){
console.log("GlobalManagementComponent Contructor")
}
userdata = [{
    id:'1',
    name:'Leanne Graham',
    username:'Bret',
    website:'hildegard.org',
    
 },{
     id:'2',
    name:'Ervin Howell',
    username:'Antonette',
    website:'anastasia.net',
 },{
    id:'3',
    name:'Clementine Bauch',
    username:'Samantha',
    website:'ramiro.info',
  }]

}