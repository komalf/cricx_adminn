import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { SidebarComponent } from './sidebar.component';
import { MidpaneComponent } from './midepane.component';
import { DashboardComponent } from './events/dashboard.component';
import { UserComponent } from './events/user.component';
import { EventComponent } from './events/event.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { BookmakingComponent } from './bookmaking/bookmaking.component';
import { CommentaryComponent } from './commentary/commentary.component';
import { FancyComponent } from './fancy/fancy.component';
import { TickerComponent } from './ticker/ticker.component';
import { ControlComponent } from './events/control.component';
import { LogsComponent } from './events/logs.component';
import { ReportbetComponent } from './analysis/reportbet.component';
import { FancydetailComponent } from './fancy/fancydetail.component';
import { BookdetailComponent } from './bookmaking/bookdetail.component';
import { AddtickerComponent } from './ticker/addticker.component';
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
import { RateModule } from './manual-rates/ratemodule.module';
import { Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MidpaneComponent,
    DashboardComponent,
    UserComponent,
    EventComponent,
    AnalysisComponent,
    BookmakingComponent,
    CommentaryComponent,
    FancyComponent,
    TickerComponent,
    ControlComponent,
    LogsComponent,
    ReportbetComponent,
    FancydetailComponent,
    BookdetailComponent,
    AddtickerComponent,
    CommentarydetailComponent,
    SettingComponent,
    DelayComponent,
    ServiceComponent,
    RulesComponent,
    GlobalManagementComponent,
    ImportMarketComponent,
    DataServiceComponent,
    FancySettlementComponent,
    SportModeComponent,
    HubConfigComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,RateModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
  console.log("AppModuleComponent Constructor")
  }
}
