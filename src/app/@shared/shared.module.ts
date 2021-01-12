import {NgModule} from '@angular/core';
import {CommonModule, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {MainHeaderComponent} from './components/main-header/main-header.component';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import {IonicSelectableModule} from 'ionic-selectable';
import {Camera} from '@ionic-native/camera/ngx';
import {Crop} from '@ionic-native/crop/ngx';
import {File} from '@ionic-native/file/ngx';
import {CameraService} from './services/camera.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HTTP} from '@ionic-native/http/ngx';
import {FileTransfer} from '@ionic-native/file-transfer/ngx';
import {ApiService} from "./services/api.service";
import {AuthService} from "./services/auth.service";
import {GeoLocationService} from "./services/geo-location.service";
import {LoadingService} from "./services/loading.service";
import {MediaService} from "./services/media.service";
import {PushNotificationService} from "./services/push-notifications.service";
import {PwaService} from "./services/pwa.service";
import {StorageService} from "./services/storage.service";
import {StorageLocalService} from "./services/storage-local.service";
import {StorageSessionService} from "./services/storage-session.service";
import {LoadingInterceptor} from "./interceptors/loading.interceptor";
import {PopoverComponent} from "./components/popover/popover.component";
import {AlertService} from "./services/alert.service";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ToastService} from "./services/toast.service";
import {NgxSummernoteModule} from "ngx-summernote";
import {StripHtmlPipe} from './pipes/strip-html.pipe';
import {FileTransferService} from "./services/file-transfer.service";
import {FileOpener} from "@ionic-native/file-opener/ngx";
import {ZXingScannerModule} from '@zxing/ngx-scanner';
import {FileUploadService} from "./services/file-upload.service";
import {NavigationService} from "./services/navigation.service";
import {StatusPipe} from './pipes/status.pipe';
import {DateFormatPipe} from './pipes/date-format.pipe';
import {SignaturePadModule} from 'angular2-signaturepad';
import {ZeroLeadingPipe} from './pipes/zero-leading.pipe';
import {GetParameterPipe} from './pipes/get-parameter.pipe';
import {CustomFormsModule} from "ng2-validation";
import {AutoCompleteModule} from "ionic4-auto-complete";
import {NgxIonicImageViewerModule} from 'ngx-ionic-image-viewer';
import {SettingsService} from "./services/settings.service";
import {TokenInterceptor} from "./interceptors/token.interceptor";
import {ApiPrefixInterceptor} from "./interceptors/api-prefix.interceptor";
import {SubdomainInterceptor} from "./interceptors/subdomain.interceptor";
import {TimeFormatPipe} from "./pipes/time-format.pipe";
import {CalendarModule} from "ion2-calendar";


@NgModule({
    declarations: [
        MainHeaderComponent,
        PopoverComponent,
        StripHtmlPipe,
        StatusPipe,
        DateFormatPipe,
        TimeFormatPipe,
        ZeroLeadingPipe,
        GetParameterPipe,
    ],
    entryComponents: [
        MainHeaderComponent,
        PopoverComponent,
    ],
    exports: [
        MainHeaderComponent,

        IonicSelectableModule,
        NgxSummernoteModule,
        ZXingScannerModule,
        SignaturePadModule,
        AutoCompleteModule,
        NgxIonicImageViewerModule,

        HttpClientModule,
        FormsModule,
        CustomFormsModule,
        ReactiveFormsModule,
        StripHtmlPipe,
        StatusPipe,
        DateFormatPipe,
        TimeFormatPipe,
        ZeroLeadingPipe,
        GetParameterPipe,
        CalendarModule
    ],
    imports: [
        CommonModule,
        RouterModule,
        IonicModule,
    ],
    providers: [
        CameraService,
        BarcodeScanner,
        Camera,
        Crop,
        File,
        HTTP,
        FileTransfer,
        FileOpener,

        ApiService,
        AuthService,
        GeoLocationService,
        LoadingService,
        MediaService,
        PushNotificationService,
        PwaService,
        StorageService,
        StorageLocalService,
        StorageSessionService,
        AlertService,
        ToastService,
        FileTransferService,
        FileUploadService,
        NavigationService,
        SettingsService,

        {
            provide: HTTP_INTERCEPTORS,
            useClass: SubdomainInterceptor,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ApiPrefixInterceptor,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoadingInterceptor,
            multi: true,
        },

        TitleCasePipe,
        LowerCasePipe,
        UpperCasePipe,
        JsonPipe,
        ZeroLeadingPipe,
        GetParameterPipe,
    ]
})
export class SharedModule {

}
