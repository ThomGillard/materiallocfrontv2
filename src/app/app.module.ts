import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Page404Component } from './components/page404/page404.component';
import { RegisterComponent } from './auth/register/register.component';
import { AddReqComponent } from './components/add-req/add-req.component';
import { GetReqComponent } from './components/get-req/get-req.component';
import {HttpClientModule} from "@angular/common/http";
import { RoomListComponent } from './components/room-list/room-list.component';
import {ReactiveFormsModule} from "@angular/forms";
import { RoomCreateComponent } from './components/room-create/room-create.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    Page404Component,
    RegisterComponent,
    AddReqComponent,
    GetReqComponent,
    RoomListComponent,
    RoomCreateComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
