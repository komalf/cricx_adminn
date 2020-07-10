import { Component} from '@angular/core';



@Component({
selector:'app-sidebar',
templateUrl:'./sidebar.component.html',
styleUrls:['./content/css/main.css',
'./content/css/all.css',
'./content/css/table.css']

})


export class SidebarComponent{
currenttab:number=4;
currentli:number=10;
subcurrenttab;
subcurrenttablist:any;
constructor(){
console.log("SidebarComponent Constructor")
}
tabmenu(tab){
 this.currenttab = tab;
}
selectsub(subli){
 this.currentli =subli;
}
subtabmenu(subtab){
    this.subcurrenttab=subtab;
}
subtabmenulist(subtablist){ 
 if(this.subcurrenttablist==subtablist){
     subtablist = false;
 }else {this.subcurrenttablist = subtablist;}
 }
}

