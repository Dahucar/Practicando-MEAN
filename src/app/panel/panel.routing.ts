import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { AddComponent } from './components/add/add.component';
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';

const PanelRouter: Routes = [
    {
        path: 'panel', 
        component: MainComponent, 
        children: [
            {path: '', component: ListComponent},
            {path: 'crear', component: AddComponent},
            {path: 'listado', component: ListComponent},
            {path: 'editar/:id', component: EditComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(PanelRouter)],
    exports: [RouterModule]
})

export class PanelRoutingModule {}
