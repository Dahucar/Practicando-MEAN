//Modulos necesarios
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PanelRoutingModule } from './panel.routing';
import { MomentModule } from 'angular2-moment';

//Componentes necesarios 
import { MainComponent } from './components/main/main.component';
import { AddComponent } from './components/add/add.component';
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';

//Servicios
import { UserService } from '../services/user.service';
import { UsersGuard } from '../services/users.guard';

//NgModule
@NgModule({
    declarations: [
        MainComponent,
        AddComponent,
        ListComponent,
        EditComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        PanelRoutingModule,
        MomentModule
    ],
    exports:[
        MainComponent,
        AddComponent,
        ListComponent,
        EditComponent
    ],
    providers:[
        UserService,
        UsersGuard
    ]
})

export class PanelModule {}
 