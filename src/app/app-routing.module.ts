import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Page404Component} from "./components/page404/page404.component";
import {HomepageComponent} from "./components/homepage/homepage.component";

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full'},
  { path: 'accueil', component: HomepageComponent },
  { path: '404', component: Page404Component },
  { path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
