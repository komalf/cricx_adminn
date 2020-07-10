import { NgModule } from '@angular/core';
import { BookrateComponent } from './bookrate.component';
import { FancyrateComponent } from './fancyrate.component';
import { Router } from '@angular/router';
import { FancyComponent } from '../fancy/fancy.component';


@NgModule({
  imports:[],
  providers:[],
  declarations:
  [
      BookrateComponent,
      FancyrateComponent,
]
})

export class RateModule{
constructor(){
    console.log("RateModule Constructor")
}

}