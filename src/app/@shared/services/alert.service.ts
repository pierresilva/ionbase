import { Injectable } from '@angular/core';
import {AlertController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
      public alertController: AlertController
  ) {  }

    public async confirmation(message: string, header: any = null, okButtonText: string = 'Si', koButtonText: string = 'No'): Promise<boolean> {
        let resolveFunction: (confirm: boolean) => void;
        const promise = new Promise<boolean>(resolve => {
            resolveFunction = resolve;
        });
        const alert = await this.alertController.create({
            header: header,
            message: '<ion-icon name="warning-outline" class="icon-s text-warning"></ion-icon><br>' + '<p class="text-s">' + message + '</p>',
            backdropDismiss: false,
            buttons: [
                {
                    text: koButtonText,
                    handler: () => resolveFunction(false)
                },
                {
                    text: okButtonText,
                    cssClass: 'text-warning',
                    handler: () => resolveFunction(true)
                }
            ]
        });
        await alert.present();
        return promise;
    }

    public async alert(message: string, header: any = null, okButtonText: string = 'OK'): Promise<boolean> {
        let resolveFunction: (confirm: boolean) => void;
        const promise = new Promise<boolean>(resolve => {
            resolveFunction = resolve;
        });
        const alert = await this.alertController.create({
            header: header,
            message: '<ion-icon name="information-circle-outline" class="icon-s text-primary"></ion-icon><br>' + '<p class="text-s">' + message + '</p>',
            backdropDismiss: false,
            buttons: [
                {
                    text: okButtonText,
                    handler: () => resolveFunction(true)
                },
            ]
        });
        await alert.present();
        return promise;
    }
}
