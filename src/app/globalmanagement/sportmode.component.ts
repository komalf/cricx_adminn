import { Component } from '@angular/core';


@Component({
selector:'',
templateUrl:'./sportmode.component.html',
styleUrls:["../content/css/main.css",
"../content/css/table.css"]

})


export class SportModeComponent{
    isActive=1;
constructor(){
console.log("SportModeComponent Constructor")
}
Tabclick(tabs){
    this.isActive=tabs;
}
sprtdata = [{
    sportName:'Cricket',
    UserName:'demomdl',
    CreditRefrence:'0.00',
    DepositFunds:'5165313',
    ApplicationName:'Desktop',
 },{
    sportName:'Soccer',
    UserName:'navcl',
    CreditRefrence:'0.00',
    DepositFunds:'354469',
    ApplicationName:'Desktop',
 },{
   sportName:'Tennis',
    UserName:'Demomaster',
    CreditRefrence:'0.00',
    DepositFunds:'5654878',
    ApplicationName:'Desktop',
  }]

}