import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SystPositionsPage } from './syst-positions.page';
import {SystPositionsEditComponent} from "./syst-positions-edit/syst-positions-edit.component";
import {SystPositionsCreateComponent} from "./syst-positions-create/syst-positions-create.component";
import {SystPositionsListComponent} from "./syst-positions-list/syst-positions-list.component";

const routes: Routes = [
    {
        path: '',
        component: SystPositionsPage
    },
    {
        path: 'list',
        component: SystPositionsListComponent
    },
    {
      path: 'create',
      component: SystPositionsCreateComponent
    },
    {
        path: ':id/edit',
        component: SystPositionsEditComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class SystPositionsPageRoutingModule {}
