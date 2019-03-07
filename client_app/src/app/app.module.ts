import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {TitleService} from "./services/title.service";
import {UserService} from "./services/user.service";
import {AppDataService} from "./services/app-data.service";
import {HttpClientModule} from "@angular/common/http";
import {DialogComponent} from "./components/dialog/dialog.component";
import {ConfirmDialog} from "./components/dialog/confirm/confirm.dialog";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DialogComponent,
    ConfirmDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [TitleService,UserService,AppDataService],
  entryComponents: [ConfirmDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
