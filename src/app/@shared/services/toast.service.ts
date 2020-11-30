import { Injectable } from '@angular/core';
import {ToastController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
      public toastController: ToastController
  ) { }

    public async present(message: string, cssClass: any = '', position: 'top' | 'bottom' | 'middle' = 'top') {
        const toast = await this.toastController.create({
            message: message,
            position: position,
            cssClass: cssClass,
            duration: 10000,
            buttons: [
                {
                    text: null,
                    icon: 'close-outline',
                    role: 'cancel',
                    side: 'start',
                    handler: () => {
                        console.log('Toast dismiss');
                    }
                }
            ]
        });
        await toast.present();
    }
}
