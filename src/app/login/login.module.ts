import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';


@NgModule({
imports:[],
exports:[LoginComponent],
declarations:[LoginComponent]

})

export class LoginModule{
constructor(){

console.log("LoginModule Constuctor")


}

}