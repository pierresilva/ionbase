import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {LoadingController} from "@ionic/angular";

@Injectable({
    providedIn: 'root',
})
export class LoadingService {
    public isLoading = new BehaviorSubject(false);
    public loading = this.isLoading.asObservable();

    public loadingInstance = null;

    constructor(
        public loadingController: LoadingController
    ) {

        this.isLoading.subscribe((data: boolean) => {
            if (data) {
                console.log('isLoading', data);
                this.present();
            } else {
                console.log('isLoading', data);
                this.hide();
            }
        });
    }

    ngOnInit() {

    }

    public async present(message: any = 'Cargando...', cssClass: any = '') {
        const loading = await this.loadingController.create({
            cssClass: cssClass,
            message: message,
            duration: 2000
        });
        await loading.present();
    }

    public async hide() {
        return await this.loadingController.getTop().then(loadingPresent => loadingPresent ? this.loadingController.dismiss(true) : null);
    }

}
