import { Component } from '@angular/core';

@Component({
selector:'',
templateUrl:'./fancysettlement.component.html',
styleUrls:["../content/css/main.css",
"../content/css/table.css"]

})

export class FancySettlementComponent{
 public isActive=1;
constructor(){
console.log("FancySettlementComponent Constructor")
}
ApplicationTab(tabs){
    this.isActive=tabs;
}
fancylistdata = [{
    betName:'20 OVER RUN MLS (MLS VS MLR)ADV',
    match:'  Melbourne Stars v Melbourne Renegades',
    matchDate:'2019-01-01 13:45:00',
    result:'5165313',
    sessionName:'5654878',
    
 },{
    betName:'T DEAN RUN (MLS VS MLR)ADV',
    match:'  Melbourne Stars v Melbourne Renegades',
    matchDate:'2019-01-01 13:45:00',
    result:'354469',
    sessionName:'5654878',
    
 },{
   betName:'T LUDEMAN RUN (MLS VS MLR)ADV',
   match:' Melbourne Stars v Melbourne Renegades',
    matchDate:'2019-01-01 13:45:00',
    result:'5654878',
    sessionName:'1ST WKT LOST TO MLS BALLS (MLS VS MLR)ADV',
    
  }]
}