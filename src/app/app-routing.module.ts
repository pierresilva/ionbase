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
        path: 'categories',
        loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesPageModule)
    },
    {
        path: 'tags',
        loadChildren: () => import('./tags/tags.module').then( m => m.TagsPageModule)
    },
    {
        path: 'posts',
        loadChildren: () => import('./posts/posts.module').then( m => m.PostsPageModule)
    },
    {
        path: 'comments',
        loadChildren: () => import('./comments/comments.module').then( m => m.CommentsPageModule)
    },
    {
        path: 'images',
        loadChildren: () => import('./images/images.module').then( m => m.ImagesPageModule)
    },


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
