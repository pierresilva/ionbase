import { Injectable } from '@angular/core';
import domtoimage from 'dom-to-image';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class PrintService {

    constructor() {}

    print(componen) {

        domtoimage.toPng(componen)
            .then((dataUrl) => {
                const popup = window.open();
                popup.document.write('<img src=' + dataUrl + '>');
                popup.focus();
                popup.print();
                //popup.close();
            })
            .catch(function (error) {
                console.error('oops, something went wrong!', error);
            });
    }
}
