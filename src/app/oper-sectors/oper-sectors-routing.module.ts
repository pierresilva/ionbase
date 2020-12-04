import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperSectorsPage } from './oper-sectors.page';
import {OperSectorsEditComponent} from "./oper-sectors-edit/oper-sectors-edit.component";
import {OperSectorsCreateComponent} from "./oper-sectors-create/oper-sectors-create.component";
import {OperSectorsListComponent} from "./oper-sectors-list/oper-sectors-list.component";

const routes: Routes = [
    {
        path: '',
        component: OperSectorsPage
    },
    {
        path: 'list',
        component: OperSectorsListComponent
    },
    {
      path: 'create',
      component: OperSectorsCreateComponent
    },
    {
        path: ':id/edit',
        component: OperSectorsEditComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class OperSectorsPageRoutingModule {}
