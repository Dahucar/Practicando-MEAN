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
import { UsersComponent } from './components/users/users.component'; 
import { SearchComponent } from './components/search/search.component'; 

//Guards
import { UsersGuard } from './services/users.guard';
import { NoIdentiyGuard } from './services/noIdentiy.guard';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'inicio', component: HomeComponent},
    {path: 'login', canActivate:[NoIdentiyGuard], component: LoginComponent},
    {path: 'registro', canActivate:[NoIdentiyGuard], component: RegistroComponent},
    {path: 'ajustes', canActivate: [UsersGuard], component: AjustesComponent},
    {path: 'usuarios', component: UsersComponent},
    {path: 'temas', component: TopicsComponent},
    {path: 'search/:busqueda', component: SearchComponent},
    {path: 'temas/:page', component: TopicsComponent},
    {path: 'tema/:idTopic', component: TopicDetailComponent},
    {path: '**', component: HomeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class appRouting {}