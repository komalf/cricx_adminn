import { Component } from '@angular/core';



@Component({
selector:'',
templateUrl:'./fancyrate.component.html',
styleUrls:['../content/css/main.css',
'../content/css/table.css',
]



})
export class FancyrateComponent{
    constructor(){
      console.log("FancyrateComponent Constructor")
    }
    betdata = [{
        id:'1',
        wlUsername:'Leanne Graham',
        smUsername:'Bret', 
        mUsername:'master1',
        clUsername:'client1',
        backLay:'back',
        score:'167',
        odds:'1.05',
        stake:'500',
        date:'02/01/2019',  
     },{
        id:'2',
        wlUsername:'Graham',
        smUsername:'Bret',
        mUsername:'master2',
        clUsername:'client2',
        backLay:'lay',
        score:'267',
        odds:'0.05',
        stake:'100',
        date:'02/01/2019',
     },{
       id:'3',
        wlUsername:'Graham bale',
        smUsername:'Bret',
        mUsername:'master3',
        clUsername:'client3',
        backLay:'lay',
        score:'67',
        odds:'2.05',
        stake:'1200',
        date:'02/01/2019',
      }]
}