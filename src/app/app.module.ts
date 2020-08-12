import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { AngularFileUploaderModule } from "angular-file-uploader";
import { appRouting } from '../app/app.routing'; 

import { AppComponent } from './app.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AjustesComponent } from './components/ajustes/ajustes.component';

import { GestionModule } from './gestion/gestion.module';
import { PanelModule } from './panel/panel.module';

/*
import { MainComponent } from './panel/components/main/main.component';
import { AddComponent } from './panel/components/add/add.component';
import { ListComponent } from './panel/components/list/list.component';
import { EditComponent } from './panel/components/edit/edit.component';
*/

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    HomeComponent,
    AjustesComponent 
  ],
  imports: [
    BrowserModule, 
    GestionModule,
    PanelModule,
    appRouting,
    FormsModule,
    HttpClientModule,
    AngularFileUploaderModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
