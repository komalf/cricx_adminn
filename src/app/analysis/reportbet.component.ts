import { Component } from '@angular/core';


@Component({
selector:'',
templateUrl:'./reportbet.component.html',
styleUrls:['../content/css/main.css',
'../content/css/table.css',
]


})

export class ReportbetComponent{
constructor(){
console.log("ReportbetComponent Constructor")
}

changeBacklay(index){
console.log(index)
if(this.reportbetdata[index].BackLay ==='BACK'){
    this.reportbetdata[index].BackLay ='LAY'
}else{
    this.reportbetdata[index].BackLay ='BACK'
}
console.log(this.reportbetdata)

}
reportbetdata = [{

    id:'1',
    ID:'119235',
    MDL:'Murari Aagra[Sat480]',
    DL:'bhola[bldelhi]',
    Client:'Monu[Monu]',
    Selection:'RAJASTHAN BJP total seats',
    BackLay:'YES',
    Ratescore:'100/52',
    Stake:'75000',
    Status:'Matched',
    PlacedTime:'11/19/2018 4:55:19 PM',
    LoggedOut: '11/19/2018 5:00:19 PM'
  
      
  },{
    id:'2',
    ID:'106031    ',
    MDL:'sagar[sagar]',
    DL:'Atul Kumar RENT[ATUL] ',
    Client:'Sarna[Roma09] ',
    Selection:'Zimbabwe',
    BackLay:'BACK',
    Ratescore:'3.9',
    Stake:'200',
    Status:'Matched',
    PlacedTime:'11/11/2018 9:47:15 AM',
    LoggedOut: '11/19/2018 10:00:19 PM'  
  },{
    id:'3',
    ID:'106030',
    MDL:'sagar[sagar]',
    DL:'Atul Kumar RENT[ATUL]',
    Client:'Sarna[Roma09]',
    Selection:'Bangladesh',
    BackLay:'LAY',
    Ratescore:'1.45   ',
    Stake:'250',
    Status:'Matched',
    PlacedTime:'11/11/2018 9:44:37 AM',
    LoggedOut: '11/19/2018 11:00:19 PM'
      
  }]

}