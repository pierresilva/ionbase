import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

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
        loadChildren: () => import('./users/users.module').then(m => m.UsersPageModule)
    },

// generated section

    {
        path: 'user-profiles',
        loadChildren: () => import('./user-profiles/user-profiles.module').then(m => m.UserProfilesPageModule)
    },
    {
        path: 'syst-cities',
        loadChildren: () => import('./syst-cities/syst-cities.module').then(m => m.SystCitiesPageModule)
    },
    {
        path: 'syst-regions',
        loadChildren: () => import('./syst-regions/syst-regions.module').then(m => m.SystRegionsPageModule)
    },
    {
        path: 'syst-countries',
        loadChildren: () => import('./syst-countries/syst-countries.module').then(m => m.SystCountriesPageModule)
    },
    {
        path: 'companies',
        loadChildren: () => import('./companies/companies.module').then(m => m.CompaniesPageModule)
    },
    {
        path: 'comp-phones',
        loadChildren: () => import('./comp-phones/comp-phones.module').then(m => m.CompPhonesPageModule)
    },
    {
        path: 'comp-addresses',
        loadChildren: () => import('./comp-addresses/comp-addresses.module').then(m => m.CompAddressesPageModule)
    },
    {
        path: 'comp-contacts',
        loadChildren: () => import('./comp-contacts/comp-contacts.module').then(m => m.CompContactsPageModule)
    },
    {
        path: 'syst-positions',
        loadChildren: () => import('./syst-positions/syst-positions.module').then(m => m.SystPositionsPageModule)
    },
    {
        path: 'syst-parameters',
        loadChildren: () => import('./syst-parameters/syst-parameters.module').then(m => m.SystParametersPageModule)
    },
    {
        path: 'syst-parameter-groups',
        loadChildren: () => import('./syst-parameter-groups/syst-parameter-groups.module').then(m => m.SystParameterGroupsPageModule)
    },
    {
        path: 'comp-responsabilities',
        loadChildren: () => import('./comp-responsabilities/comp-responsabilities.module').then(m => m.CompResponsabilitiesPageModule)
    },
    {
        path: 'hous-units',
        loadChildren: () => import('./hous-units/hous-units.module').then(m => m.HousUnitsPageModule)
    },
    {
        path: 'hous-unit-areas',
        loadChildren: () => import('./hous-unit-areas/hous-unit-areas.module').then(m => m.HousUnitAreasPageModule)
    },
    {
        path: 'oper-sectors',
        loadChildren: () => import('./oper-sectors/oper-sectors.module').then(m => m.OperSectorsPageModule)
    },
    {
        path: 'coun-meetings',
        loadChildren: () => import('./coun-meetings/coun-meetings.module').then(m => m.CounMeetingsPageModule)
    },
    {
        path: 'coun-meeting-agendas',
        loadChildren: () => import('./coun-meeting-agendas/coun-meeting-agendas.module').then(m => m.CounMeetingAgendasPageModule)
    },
    {
        path: 'coun-meeting-citations',
        loadChildren: () => import('./coun-meeting-citations/coun-meeting-citations.module').then(m => m.CounMeetingCitationsPageModule)
    },
    {
        path: 'oper-schedules',
        loadChildren: () => import('./oper-schedules/oper-schedules.module').then(m => m.OperSchedulesPageModule)
    },
    {
        path: 'oper-contractors',
        loadChildren: () => import('./oper-contractors/oper-contractors.module').then(m => m.OperContractorsPageModule)
    },
    {
        path: 'oper-movements',
        loadChildren: () => import('./oper-movements/oper-movements.module').then(m => m.OperMovementsPageModule)
    },
    {
        path: 'coun-members',
        loadChildren: () => import('./coun-members/coun-members.module').then(m => m.CounMembersPageModule)
    },
    {
        path: 'mail-templates',
        loadChildren: () => import('./mail-templates/mail-templates.module').then(m => m.MailTemplatesPageModule)
    },
    {
        path: 'mails',
        loadChildren: () => import('./mails/mails.module').then(m => m.MailsPageModule)
    },
    {
        path: 'files',
        loadChildren: () => import('./files/files.module').then(m => m.FilesPageModule)
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
