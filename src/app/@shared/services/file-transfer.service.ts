import {Injectable} from '@angular/core';
import {FileTransfer, FileUploadOptions, FileTransferObject} from '@ionic-native/file-transfer/ngx';
import {File} from '@ionic-native/file/ngx';
import {ToastService} from "./toast.service";
import {Platform} from "@ionic/angular";
import {FileOpener} from '@ionic-native/file-opener/ngx';
import {LoadingService} from "./loading.service";

@Injectable({
    providedIn: 'root'
})
export class FileTransferService {

    public fileTransfer: FileTransferObject;

    constructor(
        private transfer: FileTransfer,
        private file: File,
        private fileOpener: FileOpener,
        private toast: ToastService,
        private platform: Platform,
        private loading: LoadingService
    ) {
        this.fileTransfer = this.transfer.create()
    }

    upload() {
        let options: FileUploadOptions = {
            fileKey: 'file',
            fileName: 'name.jpg',
            headers: {}
        }
        this.fileTransfer.upload('<file path>', '<api endpoint>', options)
            .then((data) => {
                // success
            }, (err) => {
                // error
            })
    }

    download(url: any, fileName: any) {

        if (url && fileName) {

            if (this.platform.is('mobile')) {
                this.loading.present();
                const ROOT_DIRECTORY = this.platform.is('ios') ? this.file.documentsDirectory : this.file.externalRootDirectory + '/Download/';

                this.fileTransfer.download(url, ROOT_DIRECTORY + fileName)
                    .then(
                        (entry) => {
                            this.loading.hide();
                            console.log('download complete: ' + entry.toURL());
                            this.toast.present('Archivo descargado con éxito!');
                            this.fileOpener.open(ROOT_DIRECTORY + '/' + fileName, this.getMimeType(fileName))
                                .then(() => console.log('File is opened'))
                                .catch(e => console.log('Error opening file', e));
                        },
                        (error) => {
                            this.loading.hide();
                            // Controlamos el error aquí.
                            console.error(JSON.stringify(error));
                            this.toast.present(error, 'toast-danger');
                        });
            }

            if (this.platform.is('desktop')) {
                console.log(this.getMimeType(url));
                window.open(url, "_blank");
            }

        }

    }

    private getMimeType(file: any) {
        const extension = file.substr(file.lastIndexOf('.') + 1);

        const types = {
            pdf: 'application/pdf',
            png: 'image/png',
            jpg: 'image/jpeg',
            jpeg: 'image/jpeg',
            json: 'application/json',
            zip: 'application/zip',
            xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            xls: 'application/vnd.ms-excel',
            webp: 'image/webp',
            webm: 'video/webm',
            txt: 'text/plain',
            mpeg: 'video/mpeg',
            mp3: 'audio/mpeg',
            mp4: 'video/mp4',
        };

        return types[extension] ? types[extension] : 'text/plain';
    }

}
