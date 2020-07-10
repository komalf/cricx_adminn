import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './events/dashboard.component';
import { UserComponent } from './events/user.component';
import { EventComponent } from './events/event.component';
import { ControlComponent } from './events/control.component';
import { LogsComponent } from './events/logs.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { FancyComponent } from './fancy/fancy.component';
import { BookmakingComponent } from './bookmaking/bookmaking.component';
import { TickerComponent } from './ticker/ticker.component';
import { ReportbetComponent } from './analysis/reportbet.component';
import { FancydetailComponent } from './fancy/fancydetail.component';
import { BookdetailComponent } from './bookmaking/bookdetail.component';
import { AddtickerComponent } from './ticker/addticker.component';
import { CommentaryComponent } from './commentary/commentary.component';
import { CommentarydetailComponent } from './commentary/commentarydetail.component';
import { SettingComponent } from './settings/setting.component';
import { DelayComponent } from './settings/delay.component';
import { ServiceComponent } from './maintainance/services.component';
import { RulesComponent } from './maintainance/rules.component';
import { GlobalManagementComponent } from './globalmanagement/globalmanage.component';
import { ImportMarketComponent } from './globalmanagement/importmarket.component';
import { DataServiceComponent } from './globalmanagement/data-services.component';
import { FancySettlementComponent } from './globalmanagement/fancysettlement.component';
import { SportModeComponent } from './globalmanagement/sportmode.component';
import { HubConfigComponent } from './globalmanagement/hubconfig.component';
import { FancyrateComponent } from './manual-rates/fancyrate.component';

const routes: Routes = [
 {path:'dashboard',component:DashboardComponent},
 {path:'user',component:UserComponent},
 {path:'event',component:EventComponent},
 {path:'analysis',component:AnalysisComponent},
 {path:'fancy',component:FancyComponent},
 {path:'book',component:BookmakingComponent},
 {path:'ticker',component:TickerComponent},
 {path:'commentary',component:CommentaryComponent},
 {path:'login',component:CommentaryComponent},
 {path:'pnlbymark',component:CommentaryComponent},
 {path:'pnlbyagency',component:CommentaryComponent},
 {path:'betlist',component:CommentaryComponent},
 {path:'transfer',component:CommentaryComponent},
 {path:'chipsum',component:CommentaryComponent},
 {path:'rejectbet',component:CommentaryComponent},
 {path:'voidbet',component:CommentaryComponent},
 {path:'settling',component:CommentaryComponent},
 {path:'topprofit',component:CommentaryComponent},
 {path:'recentlycreat',component:CommentaryComponent},
 {path:'service',component:ServiceComponent},
 {path:'rules',component:RulesComponent},
 {path:'control-panel',component:ControlComponent},
 {path:'logs',component:LogsComponent},
 {path:'reportbet',component:ReportbetComponent},
 {path:'fancydetail',component:FancydetailComponent},
 {path:'bookdetail',component:BookdetailComponent},
 {path:'addticker',component:AddtickerComponent},
 {path:'commentaryadd',component:CommentarydetailComponent},
 {path:'setting',component:SettingComponent},
 {path:'delay',component:DelayComponent},
 {path:'services',component:ServiceComponent},
 {path:'rules',component:RulesComponent},
 {path:'globalmanage',component:GlobalManagementComponent},
 {path:'importmarket',component:ImportMarketComponent}, 
 {path:'dataservices',component:DataServiceComponent}, 
 {path:'fancysettle',component:FancySettlementComponent},
 {path:'sportmode',component:SportModeComponent},
 {path:'hubconfig',component:HubConfigComponent},
 {path:'fancyrate',component:FancyrateComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
