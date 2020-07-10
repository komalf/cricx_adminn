import { Component } from '@angular/core';

@Component({
selector:'',
templateUrl:'./user.component.html',
styleUrls:['../content/css/main.css',
'../content/css/table.css',
]


})


export class UserComponent{
   IsVisible=false;
    CreateUserdata = [{
        UserType:'Client',
        UserName:'demomdl',
        CreditRefrence:'0.00',
        DepositFunds:'5165313',
        ApplicationName:'Desktop',
        note:'this is user',
        status:'Active',
        block: 0,
        betspend: 1
     },{
        UserType:'Supermaster',
        UserName:'navcl',
        CreditRefrence:'0.00',
        DepositFunds:'354469',
        ApplicationName:'Desktop',
        note:'this is user',
        status:'InActive',
        block: 1,
        betspend: 0
     },{
        UserType:'whitelabel',
        UserName:'admin1',
        CreditRefrence:'0.00',
        DepositFunds:'354455',
        ApplicationName:'Desktop',
        note:'Special user',
        status:'Locked',
        block: 1,
        betspend: 0
     },{
       UserType:'Master',
        UserName:'Demomaster',
        CreditRefrence:'0.00',
        DepositFunds:'5654878',
        ApplicationName:'Desktop',
        note:'this is user',
        status:'Suspended',
        block: 1,
        betspend: 0
      }]
 constructor(){
console.log("UserComponent Constructor")
 } 

 ShowHide(){
  this.IsVisible =this.IsVisible ? false :true;


 }
}