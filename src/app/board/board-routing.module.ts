import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BoardComponent} from "./board.component";
import {BoardMessagesListComponent} from "./board-messages-list/board-messages-list.component";
import {BoarMessagesCreateComponent} from "./boar-messages-create/boar-messages-create.component";
import {BoarMessagesEditComponent} from "./boar-messages-edit/boar-messages-edit.component";
import {BoarMessagesShowComponent} from "./boar-messages-show/boar-messages-show.component";

const routes: Routes = [
    {
        path: '',
        component: BoardComponent,
    },
    {
        path: 'list',
        component: BoardMessagesListComponent,
    },
    {
        path: 'create',
        component: BoarMessagesCreateComponent
    },
    {
        path: ':id/edit',
        component: BoarMessagesEditComponent
    },
    {
        path: ':id/show',
        component: BoarMessagesShowComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BoardRoutingModule {
}
