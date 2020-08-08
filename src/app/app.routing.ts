//importar modulos de router
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importar comoponenetes
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';

const appRoutes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegistroComponent},
    {path: '**', component: LoginComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class appRouting {}