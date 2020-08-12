import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProyectosComponent } from './proyectos/proyectos.component';
import { ComentariosComponent } from './comentarios/comentarios.component';

const routes: Routes = [
  {path: 'proyectos', component: ProyectosComponent, children: [
    {path: 'comentarios', component: ComentariosComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionRoutingModule { }
