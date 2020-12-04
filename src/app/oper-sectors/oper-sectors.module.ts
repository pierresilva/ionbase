import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SharedModule} from '../@shared/shared.module';

import {OperSectorsPageRoutingModule} from './oper-sectors-routing.module';

import { OperSectorsPage} from './oper-sectors.page';
import { OperSectorsListComponent} from "./oper-sectors-list/oper-sectors-list.component";
import { OperSectorsCreateComponent} from "./oper-sectors-create/oper-sectors-create.component";
import { OperSectorsDuplicateComponent} from "./oper-sectors-duplicate/oper-sectors-duplicate.component";
import { OperSectorsEditComponent} from "./oper-sectors-edit/oper-sectors-edit.component";
import { OperSectorsFormComponent} from "./oper-sectors-form/oper-sectors-form.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        OperSectorsPageRoutingModule
    ],
    declarations: [
        OperSectorsPage,
        OperSectorsListComponent,
        OperSectorsCreateComponent,
        OperSectorsDuplicateComponent,
        OperSectorsEditComponent,
        OperSectorsFormComponent,
    ]
})
export class OperSectorsPageModule {
}

