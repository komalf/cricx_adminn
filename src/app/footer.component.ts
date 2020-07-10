import { Component } from '@angular/core';

@Component({
selector:'app-footer',
templateUrl:'./footer.component.html',
styleUrls:['./content/css/main.css',
'./content/css/all.css','./content/css/table.css'
]
})

export class FooterComponent{

    constructor(){

console.log("Footer Component Constructor")

    }
}