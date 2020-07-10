import { Component } from '@angular/core';


@Component({
 selector:'',
 templateUrl:'./event.component.html',
 styleUrls:['../content/css/main.css',
'../content/css/table.css',
]


})

export class EventComponent{
    isActive:number=1;
    IsVisible=false;
constructor(){
console.log("EventComponent Constructor")
}
games(tabs){
    this.isActive =tabs;
}
ShowHide(){
    this.IsVisible =this.IsVisible ? false : true;
}
inplayddata = [{
    id:'1',
    marketlist:'Bangladesh v Zimbabwe (2nd Test)',
    matchtime:'5.30am',
    channel:'1',
    action:'1'
}, {id:'2',
    marketlist:'Sri Lanka v England (2nd Test)',
    matchtime:'8.10pm',
    channel:'2',
    action:'1'
}, {id:'3',
    marketlist:'Pakistan v New Zealand (1st Test)',
    matchtime:'4.50am',
    channel:'3',
    action:'1'
}, {id:'4',
    marketlist:'Sri Lanka v England (2nd Test)',
    matchtime:'8.10pm',
    channel:'2',
    action:'1'
}, {id:'5',
    marketlist:'Sri Lanka v England (2nd Test)',
    matchtime:'8.10pm',
    channel:'2',
    action:'1'
}, {id:'6',
    marketlist:'Sri Lanka v England (2nd Test)',
    matchtime:'8.10pm',
    channel:'2',
    action:'0'
}, {id:'7',
    marketlist:'Sri Lanka v England (2nd Test)',
    matchtime:'8.10pm',
    channel:'2',
    action:'0'
}, {id:'8',
    marketlist:'Sri Lanka v England (2nd Test)',
    matchtime:'8.10pm',
    channel:'2',
    action:'1'
}, {id:'9',
    marketlist:'Sri Lanka v England (2nd Test)',
    matchtime:'8.10pm',
    channel:'2',
    action:'1'
}, {id:'10',
    marketlist:'Sri Lanka v England (2nd Test)',
    matchtime:'8.10pm',
    channel:'2',
    action:'0'
}];
}