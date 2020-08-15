import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { AngularFileUploaderModule } from "angular-file-uploader";
import { MomentModule } from 'angular2-moment';
import { NgxHighlightJsModule } from '@nowzoo/ngx-highlight-js';
import { appRouting } from '../app/app.routing'; 

import { AppComponent } from './app.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AjustesComponent } from './components/ajustes/ajustes.component';

import { GestionModule } from './gestion/gestion.module';
import { PanelModule } from './panel/panel.module';
import { TopicsComponent } from './components/topics/topics.component';
import { TopicDetailComponent } from './components/topic-detail/topic-detail.component';
import { UsersComponent } from './components/users/users.component'; 

import { UserService } from './services/user.service';
import { UsersGuard } from './services/users.guard';
import { NoIdentiyGuard } from './services/noIdentiy.guard';
import { SearchComponent } from './components/search/search.component';

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
    AjustesComponent,
    TopicsComponent,
    TopicDetailComponent,
    UsersComponent,
    SearchComponent 
  ],
  imports: [
    BrowserModule, 
    GestionModule,
    PanelModule,
    appRouting,
    FormsModule,
    HttpClientModule,
    AngularFileUploaderModule,
    MomentModule,
    NgxHighlightJsModule.forRoot()
  ],
  providers: [
    UserService,
    UsersGuard,
    NoIdentiyGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
