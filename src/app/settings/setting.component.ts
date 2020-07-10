import { Component } from '@angular/core';


@Component({
selector:'',
templateUrl:'./setting.component.html',
styleUrls:['../content/css/main.css',
'../content/css/table.css',
]



})

export class SettingComponent{
constructor(){
console.log("SettingComponent Constructor")
}
settingdata = [{
    id:'1',
    ID:'7088',
    MarketType:'Market',
    MarketInfo:'Australia v India (4th Test) /Match Odds',
    MatchStatus:'open',
    Channel:'5'
    },{
    id:'2',
    ID:'7089',
    MarketType:'Market',
    MarketInfo:'Cricket/Test Matches /Australia v India (4th Test) /Match Odds',
    MatchStatus:'closed',
    Channel:'6'
    },{
    id:'3',
    ID:'7090',
    MarketType:'Market',
    MarketInfo:'Australia v India (4th Test) /Match Odds',
    MatchStatus:'closed',
    Channel:'3'
  
      },{
    id:'4',
    ID:'7091',
    MarketType:'Market',
    MarketInfo:'Test Matches /Australia v India (4th Test) /Match Odds',
    MatchStatus:'open',
    Channel:'3'
      
  }]

}