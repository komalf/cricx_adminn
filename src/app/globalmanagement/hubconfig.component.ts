import { Component } from '@angular/core';

@Component({
 selector:'',
 templateUrl:'./hubconfig.component.html',
 styleUrls:["../content/css/main.css",
"../content/css/table.css"]


})

export class HubConfigComponent{
    constructor(){
    console.log("HubConfigComponent Constructor")
    }
    Getdata = [{
        id:'1',
        hubName:'HUB1',
        address:'http://5.189.187.81:12001',
        bfKey:'dhhSdDh7Pz3lIm5L',
        bfPwd:'Vasinson3',
        bfUsername:'dolimpio1@protonmail.com',
        mktLimit:'50',
        sportType:'Cricket',
        serviceState:'Stopped'
     },{
        id:'9',
        hubName:'HUB2',
        address:'http://173.249.21.26:12002',
        bfKey:'dhhSdDh7Pz3lIm5L	',
        bfPwd:'Tinmingh54',
        bfUsername:'farblek12@hispavista.com',
        mktLimit:'15',
        sportType:'Cricket',
        serviceState:'Stopped'
     },{
        id:'10',
        hubName:'HUB3',
        address:'http://173.212.248.188:12003',
        bfKey:'dhhSdDh7Pz3lIm5L',
        bfPwd:'Jiyakiyan@9',
        bfUsername:'brownwilliam9998@outlook.com',
        mktLimit:'50',
        sportType:'Soccer',
        serviceState:'Stopped'
      }]
}