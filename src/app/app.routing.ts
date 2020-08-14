//importar modulos de router
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importar comoponenetes
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AjustesComponent } from './components/ajustes/ajustes.component';
import { TopicsComponent } from './components/topics/topics.component';
import { TopicDetailComponent } from './components/topic-detail/topic-detail.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'inicio', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'ajustes', component: AjustesComponent},
    {path: 'temas', component: TopicsComponent},
    {path: 'temas/:page', component: TopicsComponent},
    {path: 'tema/:idTopic', component: TopicDetailComponent},
    {path: '**', component: HomeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class appRouting {}