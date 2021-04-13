import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VisitorsComponent} from "./visitors.component";
import {VisiVisitorsListComponent} from "./visi-visitors-list/visi-visitors-list.component";
import {VisiVisitorsUserListComponent} from "./visi-visitors-user-list/visi-visitors-user-list.component";
import {VisiVisitorsUserSendComponent} from "./visi-visitors-user-send/visi-visitors-user-send.component";
import {VisiVisitorsEditComponent} from "./visi-visitors-edit/visi-visitors-edit.component";
import {VisiVisitorsCreateComponent} from "./visi-visitors-create/visi-visitors-create.component";
import {VisiVisitorsUserRegisterComponent} from "./visi-visitors-user-register/visi-visitors-user-register.component";
import {VisiParkingListComponent} from "./visi-parking-list/visi-parking-list.component";
import {VisiVisitorRegisterService} from "./visi-visitor-register.service";
import {VisiVisitorRegistersListComponent} from "./visi-visitor-registers-list/visi-visitor-registers-list.component";

const routes: Routes = [
    {
        path: '',
        component: VisiVisitorsListComponent
    },
    {
        path: 'list',
        component: VisiVisitorsListComponent
    },
    {
        path: 'list/:date',
        component: VisiVisitorsListComponent
    },
    {
        path: 'create',
        component: VisiVisitorsCreateComponent
    },
    {
        path: ':id/edit',
        component: VisiVisitorsEditComponent
    },
    {
        path: 'user',
        component: VisiVisitorsUserListComponent
    },
    {
        path: 'user/send',
        component: VisiVisitorsUserSendComponent
    },
    {
        path: 'user/:id/edit',
        component: VisiVisitorsUserSendComponent
    },
    {
        path: 'user/:visiVisitorId/register',
        component: VisiVisitorsUserRegisterComponent
    },
    {
        path: 'parking',
        component: VisiParkingListComponent
    },
    {
        path: 'registers',
        component: VisiVisitorRegistersListComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorsRoutingModule { }