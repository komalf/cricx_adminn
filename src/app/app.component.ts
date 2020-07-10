import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent } from './sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./content/css/main.css',
'./content/css/all.css']
})
export class AppComponent implements OnInit {
  title = 'cricexch';
  @ViewChild(SidebarComponent)
  public isCollapsed:boolean =false;
  public isMenuCollapsed:boolean =false;
  constructor(){
console.log("AppComponent Constructor")
  }
ngOnInit(){}
  toggleCollapse(){
   this.isCollapsed = !this.isCollapsed;
   this.isMenuCollapsed = !this.isMenuCollapsed;
  }

}
