import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Page404Component} from "./components/page404/page404.component";
import {LoginComponent} from "./auth/login/login.component";
import {AddReqComponent} from "./components/add-req/add-req.component";
import {GetReqComponent} from "./components/get-req/get-req.component";


const routes: Routes = [
  { path: '', redirectTo: 'addReq', pathMatch: 'full'},
  { path: 'connexion', component: LoginComponent},
  { path: 'addReq', component: AddReqComponent},
  { path: 'getReq', component: GetReqComponent},
  { path: '404', component: Page404Component },
  { path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
