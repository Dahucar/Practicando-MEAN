import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionRoutingModule } from './gestion-routing.module';

import { ProyectosComponent } from './proyectos/proyectos.component';
import { ComentariosComponent } from './comentarios/comentarios.component';


@NgModule({
  declarations: [ProyectosComponent, ComentariosComponent],
  imports: [
    CommonModule,
    GestionRoutingModule
  ],
  exports: [ProyectosComponent, ComentariosComponent]
})
export class GestionModule { }
