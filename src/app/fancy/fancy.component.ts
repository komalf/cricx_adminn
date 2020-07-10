import { Component } from '@angular/core';

@Component({
selector:'',
templateUrl:'./fancy.component.html',
styleUrls:['../content/css/main.css',
'../content/css/table.css',
]


})

export class FancyComponent{

constructor(){
console.log("FancyComponent Constructor")
}
fancydata = [{
    id:'1',
    fancyType:'Session',
    fancyCode:'7852395',
    betName:'75 OVER RUN ENG 2',
    match:'Sri Lanka v England (2nd Test)',
    matchtime:'2018-11-18 09:59:28',
    betStatus:'INACTIVE'
 },{
    id:'2',
    fancyType:'Session',
    fancyCode:'7852396',
    betName:'80 OVER RUN ENG 2',
    match:'Sri Lanka v England (2nd Test',
    matchtime:'2018-11-18 09:59:28',
    betStatus:'INACTIVE'
 },{
    id:'3',
    fancyType:'Session',
    fancyCode:'7852397',
    betName:'85 OVER RUN ENG 2',
    match:'Sri Lanka v England (2nd Test)',
    matchtime:'2018-11-18 09:59:28',
    betStatus:'INACTIVE'
  }]

}