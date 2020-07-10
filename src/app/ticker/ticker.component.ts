import { Component } from '@angular/core';

@Component({
selector:'',
templateUrl:'./ticker.component.html',
styleUrls:['../content/css/main.css',
'../content/css/table.css',
]



})

export class TickerComponent{

constructor(){
console.log("TickerComponent Constructor")
}
tickerdata=[{
    id:'1',
    title:'WEL COME TO CRICEXCHANGE'
  },{
    id:'2',
    title:'Site is Under Maintenance..'
  }]


}