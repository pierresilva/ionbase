import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {LayoutsModule} from "./@layouts/layouts.module";
import {FormsModule} from "@angular/forms";

import {StartupService} from "./@shared/services/startup.service";
import {SplitPanelService} from "./@shared/services/split-panel.service";

export function StartupServiceFactory(startupService: StartupService): () => Promise<void> {
    return () => startupService.load();
}
const APPINIT_PROVIDES = [
    StartupService,
    {
        provide: APP_INITIALIZER,
        useFactory: StartupServiceFactory,
        deps: [StartupService],
        multi: true,
    },
];

@NgModule({
    declarations: [
        AppComponent,
    ],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot({
            mode: 'ios'
        }),
        AppRoutingModule,
        LayoutsModule,
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
        FormsModule,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        SplitPanelService,
        {
            provide: RouteReuseStrategy,
            useClass: IonicRouteStrategy
        },
        { provide: 'WINDOW',  useValue: window },
        ...APPINIT_PROVIDES,
    ],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
