import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Page404Component } from './components/page404/page404.component';
import { AddReqComponent } from './components/add-req/add-req.component';
import { GetReqComponent } from './components/get-req/get-req.component';
import {HttpClientModule} from "@angular/common/http";
import { RoomListComponent } from './components/room-list/room-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RoomCreateComponent } from './components/room-create/room-create.component';
import { ConnexionComponent } from './components/connexion/connexion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Page404Component,
    AddReqComponent,
    GetReqComponent,
    RoomListComponent,
    RoomCreateComponent,
    ConnexionComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
