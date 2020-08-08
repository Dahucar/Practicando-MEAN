import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//archivo de rutas
import { appRouting } from '../app/app.routing';

import { AppComponent } from './app.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
