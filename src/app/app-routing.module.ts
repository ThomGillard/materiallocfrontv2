import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Page404Component} from "./components/page404/page404.component";
import {HomepageComponent} from "./components/homepage/homepage.component";
import {LoginComponent} from "./module.authentification/login/login.component";


const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full'},
  { path: '', redirectTo: 'auth/login', pathMatch: 'full'},
  { path: 'auth', loadChildren: () => import('./module.authentification/auth.module').then( m => m.AuthModule ) },
  { path: 'accueil', component: HomepageComponent },
  { path: 'connexion', component: LoginComponent},
  { path: '404', component: Page404Component },
  { path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
