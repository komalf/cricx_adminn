import { Component } from '@angular/core';

@Component({
 selector:'',
 templateUrl:'./logs.component.html',
 styleUrls:['../content/css/main.css',
'../content/css/table.css',
]


})

export class LogsComponent{
constructor(){
console.log("LogsComponent Constructor")
}
logsdata = [{
    id:'1',
    UserId:'108708',
    UserName:'demodl',
    Description:'njym',
    ActivityTime:'21:10:19:10',
    Date:'2018-12-10',
    IPAddress:'103.216.212.23',
    vpnproxy:'103.216.212.23'
  
    },{
    id:'2',
    UserId:'106309',
    UserName:'demod',
    Description:'njym',
    ActivityTime:'18:05:19:00',
    Date:'2018-10-07',
    IPAddress:'2.49.190.123', 
    vpnproxy:'2.49.190.123' 
    },{
    id:'3',
    UserId:'108309',
    UserName:'demo',
    Description:'njym',
    ActivityTime:'15:10:20:12',
    Date:'2018-11-08',
    IPAddress:'103.216.212.23', 
    vpnproxy:'103.216.212.23'  
  }]

}