import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorrPacketsPage } from './corr-packets.page';
import {CorrPacketsEditComponent} from "./corr-packets-edit/corr-packets-edit.component";
import {CorrPacketsCreateComponent} from "./corr-packets-create/corr-packets-create.component";
import {CorrPacketsListComponent} from "./corr-packets-list/corr-packets-list.component";
import {CorrPostboxesComponent} from "./corr-postboxes/corr-postboxes.component";
import {CorrPostboxComponent} from "./corr-postbox/corr-postbox.component";

const routes: Routes = [
    {
        path: '',
        component: CorrPacketsPage
    },
    {
        path: 'postboxes',
        component: CorrPostboxesComponent
    },
    {
        path: 'postbox/:id',
        component: CorrPostboxComponent
    },
    {
        path: 'list',
        component: CorrPacketsListComponent
    },
    {
      path: 'create/:housUnitId',
      component: CorrPacketsCreateComponent
    },
    {
        path: ':id/edit',
        component: CorrPacketsEditComponent
    },
    {
        path: ':id/edit/:type',
        component: CorrPacketsEditComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class CorrPacketsPageRoutingModule {}
