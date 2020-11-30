import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Plugins} from '@capacitor/core';
import {ToastController} from '@ionic/angular';
import {FileTransferService} from "../@shared/services/file-transfer.service";

const {Filesystem} = Plugins;

@Component({
    selector: 'app-download',
    templateUrl: './download.page.html',
    styleUrls: ['./download.page.scss'],
})
export class DownloadPage implements OnInit {

    public device = null;

    constructor(
        public http: HttpClient,
        public toastController: ToastController,
        public fileTransfer: FileTransferService
    ) {
    }

    ngOnInit() {

    }

    downloadFileTransfer(url: any, fileName: any) {
        this.fileTransfer.download(url, fileName);
    }

    download(url: string): Observable<Blob> {
        return this.http.get(url, {
            responseType: 'blob'
        });
    }

    downloadFile(url, fileName) {
        this.download(url)
            .subscribe(blob => {
                const reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onloadend = () => {
                    let base64data: any;
                    base64data = reader.result;
                    Plugins.Filesystem.appendFile({
                        data: base64data,
                        path: 'images/image.png'
                    })
                        .then(res => {
                            console.log('se escribiooo', res);
                            this.presentToastWithOptions();
                        });
                };

                // const a = document.createElement('a');
                // const objectUrl = URL.createObjectURL(blob);
                // console.log(blob, objectUrl);
                // a.href = objectUrl;
                // a.download = fileName;
                // a.click();
                // URL.revokeObjectURL(objectUrl);
            });
    }

    async presentToastWithOptions() {
        const toast = await this.toastController.create({
            header: 'Toast header',
            message: 'Click to Close',
            position: 'top',
            buttons: [
                {
                    side: 'start',
                    icon: 'star',
                    text: 'Favorite',
                    handler: () => {
                        console.log('Favorite clicked');
                    }
                }, {
                    text: 'Done',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }

                }
            ]
        });
        toast.present();
    }

}
