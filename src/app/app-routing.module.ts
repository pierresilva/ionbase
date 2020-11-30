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

// generated section

// end section
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
