import { Component, OnInit } from '@angular/core';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./content/css/main.css',
'./content/css/all.css',
'./content/css/table.css']
})

export class HeaderComponent implements OnInit{
    showpasswordmodal:boolean=false;
    isactive:boolean=false;
    public now:Date =new Date();
    public clock =Date.now();
constructor(){
    console.log("HeaderComponent Constructor")
    setInterval(() => {
        this.now =new Date();
        this.clock=Date.now();
        },1000);   
}
ngOnInit(){

}




dialogOpen(){
   if(this.showpasswordmodal !=true){
     this.showpasswordmodal=true;
   }else{
       this.showpasswordmodal =!this.showpasswordmodal;
   }
}

showgmt(){
    if(this.isactive !=true){
     this.isactive=true;

    }else{
      this.isactive=!this.isactive;

    }

}
}