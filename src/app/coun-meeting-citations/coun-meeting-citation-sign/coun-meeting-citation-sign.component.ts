import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Platform} from "@ionic/angular";
import {SignaturePad} from "angular2-signaturepad";
import {FormGroup} from "@angular/forms";
import {ApiService} from "../../@shared/services/api.service";
import {ToastService} from "../../@shared/services/toast.service";
import {AlertService} from "../../@shared/services/alert.service";
import {ActivatedRoute, Router} from "@angular/router";

import {environment} from "../../../environments/environment";


@Component({
    selector: 'app-coun-meeting-citation-sign',
    templateUrl: './coun-meeting-citation-sign.component.html',
    styleUrls: ['./coun-meeting-citation-sign.component.scss'],
})
export class CounMeetingCitationSignComponent implements OnInit, AfterViewInit {

    @ViewChild(SignaturePad) signaturePad: SignaturePad;
    @ViewChild('signatureForm') signatureForm: FormGroup;

    citationId: any = null;

    public signaturePadOptions: Object = {
        minWidth: 1,
        maxWidth: 2,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        penColor: 'rgb(0, 0, 0)',
        canvasWidth: 500,
        canvasHeight: 250,
    };

    signature = '';

    citation: any = {};

    constructor(
        public platform: Platform,
        public api: ApiService,
        public toast: ToastService,
        public alert: AlertService,
        public route: ActivatedRoute,
        public router: Router,
    ) {
        this.citationId = this.route.snapshot.paramMap.get('id');
    }

    ngOnInit() {
        this.getCitation();
    }


    ngAfterViewInit() {
        // this.signaturePad.set('minWidth', 5);
        if (this.platform.is('mobile')) {
            this.signaturePad.set('canvasWidth', (window.innerWidth - 10));
            const spContent = document.getElementById('signature-content');
            spContent.style.width = (window.innerWidth - 10) + 'px !important';
        }
        this.signaturePad.clear();
    }


    getCitation() {
        this.api.get('coun-meeting-citations/' + this.citationId)
            .subscribe(
                (res: any) => {
                    this.citation = res.data;
                }
            );
    }

    drawComplete() {
        // will be notified of szimek/signature_pad's onEnd event
        this.signature = this.signaturePad.toDataURL();
        this.citation.signature = this.signature;
    }

    drawStart() {
        // will be notified of szimek/signature_pad's onBegin event
        console.log('begin drawing');
    }

    signatureClear() {
        this.signaturePad.clear();
    }

    signatureSave() {
        this.api.put('coun-meeting-citations/sign', this.citation)
            .subscribe(
                (res: any) => {
                    this.toast.present('Acta firmada con éxito!', 'toast-success');
                    this.router.navigateByUrl('/')
                },
                (err: any) => {
                    // this.toast.present('Algo salio mal!', 'toast-error')
                }
            );
    }


}
