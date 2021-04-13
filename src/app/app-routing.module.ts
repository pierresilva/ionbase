import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./@shared/guards/auth.guard";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'landing',
        pathMatch: 'full'
    },
    {
        path: 'folder/:id',
        loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
    },
    {
        path: 'barcode-scanner',
        loadChildren: () => import('./barcode-scanner/barcode-scanner.module').then(m => m.BarcodeScannerPageModule)
    },
    {
        path: 'landing',
        loadChildren: () => import('./landing/landing.module').then(m => m.LandingPageModule)
    },
    {
        path: 'camera',
        loadChildren: () => import('./camera/camera.module').then(m => m.CameraPageModule)
    },
    {
        path: 'download',
        loadChildren: () => import('./download/download.module').then(m => m.DownloadPageModule)
    },
    {
        path: 'users',
        loadChildren: () => import('./users/users.module').then(m => m.UsersPageModule),
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        data: {
            logged: true,
        }
    },
    {
        path: 'board',
        // canActivate: [AuthGuard],
        // canActivateChild: [AuthGuard],
        data: {
            title: 'CARTELERA',
            // roles: ['admin'],
            // permissions: []
        },
        loadChildren: () => import('./board/board.module').then(m => m.BoardModule)
    },
    {
        path: 'visitors',
        // canActivate: [AuthGuard],
        // canActivateChild: [AuthGuard],
        data: {
            title: 'VISITANTES',
            // roles: ['admin'],
            // permissions: []
        },
        loadChildren: () => import('./visitors/visitors.module').then(m => m.VisitorsModule)
    },

// generated section

    {
        path: 'user-profiles',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        data: {
            title: 'PERFILES DE USUARIOS',
            roles: ['admin'],
            // permissions: []
        },
        loadChildren: () => import('./user-profiles/user-profiles.module').then(m => m.UserProfilesPageModule)
    },
    {
        path: 'syst-cities',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        data: {
            title: 'CIUDADES',
            roles: ['admin'],
            // permissions: []
        },
        loadChildren: () => import('./syst-cities/syst-cities.module').then(m => m.SystCitiesPageModule)
    },
    {
        path: 'syst-regions',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        data: {
            title: 'DEPARTAMENTOS',
            roles: ['admin'],
            // permissions: []
        },
        loadChildren: () => import('./syst-regions/syst-regions.module').then(m => m.SystRegionsPageModule)
    },
    {
        path: 'syst-countries',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        data: {
            title: 'PAISES',
            roles: ['admin'],
            // permissions: []
        },
        loadChildren: () => import('./syst-countries/syst-countries.module').then(m => m.SystCountriesPageModule)
    },
    {
        path: 'companies',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        data: {
            title: 'EMPRESAS',
            roles: ['admin'],
            // permissions: []
        },
        loadChildren: () => import('./companies/companies.module').then(m => m.CompaniesPageModule)
    },
    {
        path: 'comp-phones',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        data: {
            title: 'TELÉFONOS DE EMPRESAS',
            roles: ['admin'],
            // permissions: []
        },
        loadChildren: () => import('./comp-phones/comp-phones.module').then(m => m.CompPhonesPageModule)
    },
    {
        path: 'comp-addresses',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        data: {
            title: 'EMPRESAS DIRECCIONES',
            roles: ['admin'],
            // permissions: []
        },
        loadChildren: () => import('./comp-addresses/comp-addresses.module').then(m => m.CompAddressesPageModule)
    },
    {
        path: 'comp-contacts',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        data: {
            title: 'EMPRESAS CONTACTOS',
            roles: ['admin'],
            // permissions: []
        },
        loadChildren: () => import('./comp-contacts/comp-contacts.module').then(m => m.CompContactsPageModule)
    },
    {
        path: 'syst-positions',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        data: {
            title: 'CARGOS',
            roles: ['admin'],
            // permissions: []
        },
        loadChildren: () => import('./syst-positions/syst-positions.module').then(m => m.SystPositionsPageModule)
    },
    {
        path: 'syst-parameters',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        data: {
            title: 'PARAMETROS',
            roles: ['admin'],
            // permissions: []
        },
        loadChildren: () => import('./syst-parameters/syst-parameters.module').then(m => m.SystParametersPageModule)
    },
    {
        path: 'syst-parameter-groups',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        data: {
            title: 'GRUPOS DE PARAMETROS',
            roles: ['admin'],
            // permissions: []
        },
        loadChildren: () => import('./syst-parameter-groups/syst-parameter-groups.module').then(m => m.SystParameterGroupsPageModule)
    },
    {
        path: 'comp-responsabilities',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        data: {
            title: 'EMPRESAS RESPONSABILIDADES LEGALES',
            roles: ['admin'],
            // permissions: []
        },
        loadChildren: () => import('./comp-responsabilities/comp-responsabilities.module').then(m => m.CompResponsabilitiesPageModule)
    },
    {
        path: 'hous-units',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        data: {
            title: 'UNIDADES HABITACIONALES',
            roles: ['admin'],
            // permissions: []
        },
        loadChildren: () => import('./hous-units/hous-units.module').then(m => m.HousUnitsPageModule)
    },
    {
        path: 'hous-unit-areas',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        data: {
            title: 'UNIDADES HABITACIONALES AREAS',
            roles: ['admin'],
            // permissions: []
        },
        loadChildren: () => import('./hous-unit-areas/hous-unit-areas.module').then(m => m.HousUnitAreasPageModule)
    },
    {
        path: 'oper-sectors',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        data: {
            title: 'OPERATIVIDAD SECTORES',
            roles: ['admin'],
            // permissions: []
        },
        loadChildren: () => import('./oper-sectors/oper-sectors.module').then(m => m.OperSectorsPageModule)
    },
    {
        path: 'coun-meetings',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        data: {
            title: 'JUNTAS DEL CONSEJO',
            roles: ['admin'],
            // permissions: []
        },
        loadChildren: () => import('./coun-meetings/coun-meetings.module').then(m => m.CounMeetingsPageModule)
    },
    {
        path: 'coun-meeting-agendas',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        data: {
            title: 'JUNTAS AGENDAS',
            roles: ['admin'],
            // permissions: []
        },
        loadChildren: () => import('./coun-meeting-agendas/coun-meeting-agendas.module').then(m => m.CounMeetingAgendasPageModule)
    },
    {
        path: 'coun-meeting-citations',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        data: {
            title: 'JUNTAS CITACIONES',
            // roles: ['user'],
            // permissions: []
        },
        loadChildren: () => import('./coun-meeting-citations/coun-meeting-citations.module').then(m => m.CounMeetingCitationsPageModule)
    },
    {
        path: 'oper-schedules',
        // canActivate: [AuthGuard],
        // canActivateChild: [AuthGuard],
        data: {
            title: 'OPERATRIVIDAD AGENDAS',
            // roles: ['admin', 'servicios-generales', 'servicios-seguridad'],
            // permissions: []
        },
        loadChildren: () => import('./oper-schedules/oper-schedules.module').then(m => m.OperSchedulesPageModule)
    },
    {
        path: 'oper-contractors',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        data: {
            title: 'CONTRATISTAS OPERATIVOS',
            roles: ['admin'],
            // permissions: []
        },
        loadChildren: () => import('./oper-contractors/oper-contractors.module').then(m => m.OperContractorsPageModule)
    },
    {
        path: 'oper-movements',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        data: {
            title: 'MOVIMIENTOS OPERATIVOS',
            roles: ['admin'],
            // permissions: []
        },
        loadChildren: () => import('./oper-movements/oper-movements.module').then(m => m.OperMovementsPageModule)
    },
    {
        path: 'coun-members',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        data: {
            title: 'JUNTAS MIEMBROS',
            roles: ['admin'],
            // permissions: []
        },
        loadChildren: () => import('./coun-members/coun-members.module').then(m => m.CounMembersPageModule)
    },
    {
        path: 'mail-templates',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        data: {
            title: 'CORREOS PLANTILLAS',
            roles: ['admin'],
            // permissions: []
        },
        loadChildren: () => import('./mail-templates/mail-templates.module').then(m => m.MailTemplatesPageModule)
    },
    {
        path: 'mails',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        data: {
            title: 'CORREOS',
            roles: ['admin'],
            // permissions: []
        },
        loadChildren: () => import('./mails/mails.module').then(m => m.MailsPageModule)
    },
    {
        path: 'files',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        data: {
            title: 'JUNTAS ARCHIVOS DE AGENDAS',
            roles: ['admin'],
            // permissions: []
        },
        loadChildren: () => import('./files/files.module').then(m => m.FilesPageModule)
    },
    {
        path: 'corr-packets',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        data: {
            title: 'CORRESPONDENCIA PAQUETES',
            roles: ['admin'],
            // permissions: []
        },
        loadChildren: () => import('./corr-packets/corr-packets.module').then(m => m.CorrPacketsPageModule)
    },
    {
        path: 'settings',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        data: {
            title: 'AJUSTES',
            roles: ['admin'],
            // permissions: []
        },
        loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule)
    },
    {
        path: 'setting-groups',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        data: {
            title: 'AJUSTES GRUPOS',
            roles: ['admin'],
            // permissions: []
        },
        loadChildren: () => import('./setting-groups/setting-groups.module').then(m => m.SettingGroupsPageModule)
    },
    {
        path: 'user-roles',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        data: {
            title: 'USUARIOS ROLES',
            roles: ['admin'],
            // permissions: []
        },
        loadChildren: () => import('./user-roles/user-roles.module').then(m => m.UserRolesPageModule)
    },
    {
        path: 'user-permissions',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        data: {
            title: 'USUARIOS PERMISOS',
            roles: ['admin'],
            // permissions: []
        },
        loadChildren: () => import('./user-permissions/user-permissions.module').then(m => m.UserPermissionsPageModule)
    },
    {
        path: 'oper-machines',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        data: {
            title: 'OPERATIVIDAD MAQUINARIA',
            roles: ['admin'],
            // permissions: []
        },
        loadChildren: () => import('./oper-machines/oper-machines.module').then(m => m.OperMachinesPageModule)
    },
    {
        path: 'oper-preventive-maintenances',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        data: {
            title: 'OPERATIVIDAD MTTO PREVENTIVOS',
            roles: ['admin'],
            // permissions: []
        },
        loadChildren: () => import('./oper-preventive-maintenances/oper-preventive-maintenances.module').then(m => m.OperPreventiveMaintenancesPageModule)
    },
    {
        path: 'oper-replacements',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        data: {
            title: 'OPERATIVIDAD REPUESTOS',
            roles: ['admin'],
            // permissions: []
        },
        loadChildren: () => import('./oper-replacements/oper-replacements.module').then(m => m.OperReplacementsPageModule)
    },
    {
        path: 'oper-items',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        data: {
            title: 'OPERATIVIDAD ITEMS MTTO CORRECTIVO',
            roles: ['admin'],
            // permissions: []
        },
        loadChildren: () => import('./oper-items/oper-items.module').then(m => m.OperItemsPageModule)
    },
    {
        path: 'oper-reasons',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        data: {
            title: 'OPERATIVIDAD MOTIVOS MTTO CORRECTIVO',
            roles: ['admin'],
            // permissions: []
        },
        loadChildren: () => import('./oper-reasons/oper-reasons.module').then(m => m.OperReasonsPageModule)
    },
    {
        path: 'oper-corrective-maintenances',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        data: {
            title: 'OPERATIVIDAD MTTO CORRECTIVOS',
            roles: ['admin'],
            // permissions: []
        },
        loadChildren: () => import('./oper-corrective-maintenances/oper-corrective-maintenances.module').then(m => m.OperCorrectiveMaintenancesPageModule)
    },
    {
        path: 'oper-maintenance-repairs',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        data: {
            title: 'OPERATIVIDAD REPARACIONES',
            roles: ['admin'],
            // permissions: []
        },
        loadChildren: () => import('./oper-maintenance-repairs/oper-maintenance-repairs.module').then(m => m.OperMaintenanceRepairsPageModule)
    },
    {
        path: 'invoicing/invoices',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        data: {
            title: 'FACTURAS',
            roles: ['admin'],
            // permissions: []
        },
        loadChildren: () => import('./invo-invoices/invo-invoices.module').then(m => m.InvoInvoicesModule)
    },
    {
        path: 'invoicing/resolutions',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        data: {
            title: 'RESOLUCIONES',
            roles: ['admin'],
            // permissions: []
        },
        loadChildren: () => import('./invo-resolutions/invo-resolutions.module').then(m => m.InvoResolutionsModule)
    },

// end section

    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthPageModule)
    },
    {
        path: 'settings',
        loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule)
    },
    {
        path: 'setting-groups',
        loadChildren: () => import('./setting-groups/setting-groups.module').then(m => m.SettingGroupsPageModule)
    },

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
