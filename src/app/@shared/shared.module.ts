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
import {SelectInputComponent} from "./components/select-input/select-input.component";
import {ToastService} from "./services/toast.service";
import {NgxSummernoteModule} from "ngx-summernote";
import {StripHtmlPipe} from './pipes/strip-html.pipe';
import {FileTransferService} from "./services/file-transfer.service";
import {FileOpener} from "@ionic-native/file-opener/ngx";
import {ZXingScannerModule} from '@zxing/ngx-scanner';
import {FileUploadService} from "./services/file-upload.service";
import {NavigationService} from "./services/navigation.service";
import { StatusPipe } from './pipes/status.pipe';
import { DateFormatPipe } from './pipes/date-format.pipe';


@NgModule({
    declarations: [
        MainHeaderComponent,
        PopoverComponent,
        SelectInputComponent,
        StripHtmlPipe,
        StatusPipe,
        DateFormatPipe,
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

        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        SelectInputComponent,
        StripHtmlPipe,
        StatusPipe,
        DateFormatPipe,
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
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoadingInterceptor,
            multi: true,
        },

        TitleCasePipe,
        LowerCasePipe,
        UpperCasePipe,
        JsonPipe,
    ]
})
export class SharedModule {
}
