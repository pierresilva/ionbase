import {Component, OnInit, ViewChild} from '@angular/core';
import {CounMeeting} from "../coun-meeting";
import {FormGroup} from "@angular/forms";
import {TitleCasePipe} from "@angular/common";
import {CounMeetingsService} from "../coun-meetings.service";
import {UsersService} from "../../users/users.service";
import {User} from "../../users/user";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Platform} from "@ionic/angular";
import {ToastService} from "../../@shared/services/toast.service";
import {AlertService} from "../../@shared/services/alert.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../../@shared/services/api.service";
import {IonicSelectableComponent} from "ionic-selectable";

import * as moment from 'moment';
import {GetParameterPipe} from "../../@shared/pipes/get-parameter.pipe";
import {SplitPanelService} from "../../@shared/services/split-panel.service";
import {Subscription} from "rxjs";
import {getFormValidationErrors} from "../../@shared/classes/form-validation-errors";

@Component({
    selector: 'app-coun-meetings-create-custom',
    templateUrl: './coun-meetings-create-custom.component.html',
    styleUrls: ['./coun-meetings-create-custom.component.scss'],
})
export class CounMeetingsCreateCustomComponent implements OnInit {

    model: CounMeeting = {};

    @ViewChild('counMeetingsForm') counMeetingsForm: FormGroup;
    @ViewChild('userSelect') userSelect: IonicSelectableComponent;

    private formSubscription: Subscription;

    public validationMessages = {
        'name': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('NOMBRE') + ' es obligatorio.'},
        ],
        'description': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('DESCRIPCIÓN') + ' es obligatorio.'},
        ],
        'date': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('FECHA') + ' es obligatorio.'},
        ],
        'hour': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('HORA') + ' es obligatorio.'},
        ],
        'place': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('LUGAR') + ' es obligatorio.'},
        ],
        'url': [
            {
                type: 'required',
                message: 'El campo ' + this.toTitlecase.transform('DIRECCIÓN REUNIÓN VIRTUAL') + ' es obligatorio.'
            },
        ],
        'act': [
            {type: 'required', message: 'El campo ' + this.toTitlecase.transform('ACTA') + ' es obligatorio.'},
        ],
        'coun_meeting_agenda_ids': [
            {
                type: 'required',
                message: 'El campo ' + this.toTitlecase.transform('JUNTAS AGENDAS') + ' es obligatorio.'
            },
        ],
        'coun_meeting_citation_ids': [
            {
                type: 'required',
                message: 'El campo ' + this.toTitlecase.transform('JUNTAS CITACIONES') + ' es obligatorio.'
            },
        ],
        'type': [
            {
                type: 'required',
                message: 'El campo ' + this.toTitlecase.transform('TIPO') + ' es obligatorio.'
            },
        ],
    };

    modelName = '';

    users: User[] = [];

    citations: User[] = [];

    type: string = 'general';
    user: any = null;

    counMeetingId: any = null;

    councilStarted = false;

    fileToUpload: any = null;

    selectYears: any[] = [2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];

    constructor(
        public counMeetingsService: CounMeetingsService,
        public usersService: UsersService,
        private toTitlecase: TitleCasePipe,
        public http: HttpClient,
        public api: ApiService,
        public platform: Platform,
        public toast: ToastService,
        public alert: AlertService,
        public route: ActivatedRoute,
        public router: Router,
        private getParameter: GetParameterPipe,
        public splitPanel: SplitPanelService
    ) {
    }

    ngOnInit() {
        this.usersService.getAll();
        this.model.coun_meeting_citations = [];
        this.model.coun_meeting_agendas = [];
        this.counMeetingId = this.route.snapshot.paramMap.get('id');

        this.getMeeting();
    }

    ionViewWillEnter() {
        this.splitPanel.show.next(true);
        this.formSubscription = this.counMeetingsForm.valueChanges.subscribe((data) => {
            console.log(this.counMeetingsForm.value);

            if (this.counMeetingsForm.invalid) {
                console.log(getFormValidationErrors(this.counMeetingsForm.controls));
            }
        });
    }

    ionViewWillLeave() {
        this.formSubscription.unsubscribe();
    }

    toggleMenu() {
        const splitPane = document.querySelector('ion-split-pane');
        const windowWidth = window.innerWidth;
        const splitPaneShownAt = 992;
        const when = `(min-width: ${splitPaneShownAt}px)`;
        if (windowWidth >= splitPaneShownAt) {
            // split pane view is visible
            const open = splitPane.when === when;
            splitPane.when = open ? false : when;
        } else {
            // split pane view is not visible
            // toggle menu open
            const menu = splitPane.querySelector('ion-menu');
            return menu.open();
        }
    }

    getMeeting(id: any = this.counMeetingId) {
        if (this.counMeetingId) {
            this.api.get(this.counMeetingsService.counMeetingsUrl + '/' + id + '/edit')
                .subscribe(
                    (res: any) => {
                        this.counMeetingsService.counMeeting = res.data.model;
                        this.model = res.data.model;
                        if (!this.model.start_content) {
                            this.model.start_content = 'Se da inicio al consejo de administración a las ' + moment().format('HH:mm') + ' horas del día ' + moment().format('DD/MM/YYYY');
                            console.log(this.model);
                        }

                        if (!this.model.end_content) {
                            this.model.end_content = 'Se da fin al consejo de administración a las ' + moment().format('HH:mm') + ' horas del día ' + moment().format('DD/MM/YYYY');
                            console.log(this.model);
                        }
                        this.counMeetingsService.counMeetingLists = res.lists;
                    },
                    (err: any) => {
                        console.error(err);
                    }
                );
        }
        return;
    }

    setCitations(user) {
        console.log(user);
        // this.citations.push(user.value);

        /*if (this.counMeetingId) {
            this.toast.present('No se pueden agregar mas citaciones', 'toast-info');
            this.userSelect.clear();
            return;
        }*/

        for (let i = 0; i < this.model.coun_meeting_citations.length; i++) {
            if (this.model.coun_meeting_citations[i].user_id == user.value.id) {
                this.toast.present('El usuario ya esta en la lista de citaciones', 'toast-error');
                this.userSelect.clear();
                return;
            }
        }

        this.model.coun_meeting_citations.push({
            user_id: user.value.id,
            name: 'Citación para ' + user.value.name
        });
        this.userSelect.clear();
    }

    removeCitations(user) {

        console.log(user);

        for (let i = 0; i < this.model.coun_meeting_citations.length; i++) {
            if (this.model.coun_meeting_citations[i].id && this.model.coun_meeting_citations[i].user_id == user.user_id) {
                this.api.delete('coun-meeting-citations/' + this.model.coun_meeting_citations[i].id, {})
                    .subscribe(
                        (res: any) => {
                            console.log(res);
                        }
                    );
            }
            if (this.model.coun_meeting_citations[i].user_id == user.user_id) {
                this.model.coun_meeting_citations.splice(i, 1);
            }
        }


    }

    markAssistance(citation: any) {
        citation.attended = citation.attended ? false : true;

        this.api.put('coun-meeting-citations/' + citation.id, {model: citation})
            .subscribe(
                (res: any) => {
                    console.log(res);
                    this.toast.present('Asistencia actualizada', 'toast-info');
                    this.getMeeting(this.counMeetingId);
                }
            );

    }

    startCouncil() {

        this.alert.confirmation('Iniciar junta?', '', 'Si', 'No')
            .then(res => {
                if (res) {
                    console.log('Iniciar');
                    this.councilStarted = true;
                    this.type = 'act';
                    this.model.status = 'in_progress';
                    this.saveCounMeeting('La Junta esta en progreso!');
                    return;
                } else {
                    console.log('No iniciar');
                    return;
                }
            });

    }

    cancelCouncil() {
        this.alert.confirmation('Cancelar la junta?', 'Cancelar', 'Si', 'No')
            .then(res => {
                if (res) {
                    // this.model.status = 'finalized';
                    console.log(this.model.status);
                    this.api.post('coun-meetings/cancellation', {model: this.model})
                        .subscribe(
                            (res: any) => {
                                console.log(res);
                                this.toast.present('Junta cancelada!', 'toast-info');
                                // this.saveCounMeeting();
                                this.counMeetingsService.getCounMeetings();
                                this.router.navigateByUrl('/coun-meetings/list/custom');
                            }
                        );
                } else {
                    return;
                }
            });
    }

    inProgress() {
        this.model.status = 'in_progress';
        this.saveCounMeeting('La Junta esta en progreso!');
    }

    finalizeCouncil() {
        this.alert.confirmation('Finalizar la junta?', 'Finalizar', 'Si', 'No')
            .then(res => {
                if (res) {
                    // this.model.status = 'finalized';
                    console.log(this.model.status);
                    this.api.post('coun-meetings/finalize', {model: this.model})
                        .subscribe(
                            (res: any) => {
                                console.log(res);
                                this.toast.present('Junta finalizada!', 'toast-info');
                                // this.saveCounMeeting();
                                this.counMeetingsService.getCounMeetings();
                                this.router.navigateByUrl('/coun-meetings/list/custom');
                            }
                        );
                } else {
                    return;
                }
            });
    }

    removeFocus(event) {

    }

    getQuorum() {
        let quorum = true;
        for (let i = 0; i < this.model.coun_meeting_citations.length; i++) {
            if (!this.model.coun_meeting_citations[i].attended) {
                quorum = false;
            }
        }

        return quorum;
    }

    saveCounMeeting(alert: string = null, sendPreview: boolean = false) {
        if (!this.model.coun_meeting_agendas.length) {
            this.toast.present('Ingrese ordenes del dia en la pestaña agenda', 'toast-error');
            return;
        }

        if (this.counMeetingId) {
            this.http.put(environment.serverUrl + '/api/coun-meeting-custom/' + this.counMeetingId, this.model)
                .subscribe(
                    (res: any) => {
                        console.log(res);
                        this.getMeeting(res.data.id);
                        if (alert) {
                            this.toast.present(alert, 'toast-primary');
                        }
                        if (sendPreview) {
                            this.http.get(environment.serverUrl + '/api/coun-meetings/' + this.counMeetingId + '/send-preview')
                                .subscribe(
                                    (res: any) => {
                                        console.log(res.data);
                                    }
                                );
                        }
                    }
                );
        } else {
            this.http.post(environment.serverUrl + '/api/coun-meeting-custom', this.model)
                .subscribe(
                    (res: any) => {
                        console.log(res);
                        this.getMeeting(res.data.id);
                        this.counMeetingsService.getCounMeetings();
                        this.router.navigateByUrl('/coun-meetings/list/custom');
                    }
                );
        }

    }

    segmentChanged(event: any) {
        console.log('Segment changed', event);
        this.type = event.target.value;
    }

    onRenderItems(event) {
        console.log(`Moving item from ${event.detail.from} to ${event.detail.to}`);
        let draggedItem = this.model.coun_meeting_agendas.splice(event.detail.from, 1)[0];
        this.model.coun_meeting_agendas.splice(event.detail.to, 0, draggedItem)
        for (let i = 0; i < this.model.coun_meeting_agendas.length; i++) {
            this.model.coun_meeting_agendas[i].order = i;
        }
        event.detail.complete();
        if (this.model.id) {
            this.saveCounMeeting();
        }
    }

    addAgendaItem(event) {

        for (let i = 0; i < this.model.coun_meeting_agendas.length; i++) {
            if (event.target.value == this.model.coun_meeting_agendas[i].name) {
                this.toast.present('Ya existe un orden del día con el mismo nombre!', 'toast-error');
                return;
            }
        }

        this.model.coun_meeting_agendas.push({
            name: event.target.value,
            order: this.model.coun_meeting_agendas.length
        });

        const element = document.getElementById('order-day-field');
        element.setAttribute('value', '');
    }

    removeAgendaItem(agenda) {
        for (let i = 0; i < this.model.coun_meeting_agendas.length; i++) {
            if (this.model.coun_meeting_agendas[i].id && this.model.coun_meeting_agendas[i].name == agenda.name) {
                this.api.delete('coun-meeting-agendas/' + this.model.coun_meeting_agendas[i].id, {})
                    .subscribe(
                        (res: any) => {
                            console.log(res);
                        }
                    );
            }
            if (agenda.name == this.model.coun_meeting_agendas[i].name) {
                this.model.coun_meeting_agendas.splice(i, 1);
            }
        }
    }

    getAdditionalCitations() {
        const additionalCitations = [];

        for (let i = 0; i < this.model.coun_meeting_citations.length; i++) {
            if (!this.model.coun_meeting_citations[i].coun_member_id) {
                additionalCitations.push(this.model.coun_meeting_citations[i]);
            }
        }

        return additionalCitations;

    }

    onFileSelect(input: HTMLInputElement): void {

        function formatBytes(bytes: number): string {
            const UNITS = ['Bytes', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
            const factor = 1024;
            let index = 0;

            while (bytes >= factor) {
                bytes /= factor;
                index++;
            }

            return `${parseFloat(bytes.toFixed(2))} ${UNITS[index]}`;
        }

        this.fileToUpload = input.files[0];
        this.uploadFile()
            .then((res: any) => {
                this.model.files.push(res.data);
                console.log(this.model.files);
            });
    }

    uploadFile(): Promise<any> {
        const endpoint = environment.serverUrl + '/api/drive/upload';
        const formData: FormData = new FormData();
        formData.append('file', this.fileToUpload, this.fileToUpload.name);
        formData.append('fileable_id', this.model.id);
        formData.append('fileable_type', 'CounMeeting');
        return this.http.post(endpoint, formData, {}).toPromise();
    }

    removeFile(file: any) {

        this.alert.confirmation('Eliminar archivo?')
            .then(res => {

                if (res) {
                    for (let i = 0; i < this.model.files.length; i++) {
                        if (file.id == this.model.files[i].id) {
                            const endpoint = environment.serverUrl + '/api/drive/delete';
                            this.http.delete(endpoint + '/' + file.id)
                                .subscribe(
                                    (res: any) => {
                                        this.toast.present(res.message, null);
                                        this.model.files.splice(i, 1);
                                    }
                                );
                            return;
                        }
                    }
                } else {
                    return;
                }

            });


    }

    // set setCounMeetingAgendaIds
    setCounMeetingAgendaIds(event: any) {
        let counMeetingAgendaIds = null;
        if (event.value.length) {
            counMeetingAgendaIds = [];
            for (let i = 0; i < event.value.length; i++) {
                counMeetingAgendaIds.push(event.value[i].id);
            }
        }
        this.counMeetingsService.counMeeting.coun_meeting_agenda_ids = counMeetingAgendaIds;
    }

    // end setCounMeetingAgendaIds


    // set setCounMeetingCitationIds
    setCounMeetingCitationIds(event: any) {
        let counMeetingCitationIds = null;
        if (event.value.length) {
            counMeetingCitationIds = [];
            for (let i = 0; i < event.value.length; i++) {
                counMeetingCitationIds.push(event.value[i].id);
            }
        }
        this.counMeetingsService.counMeeting.coun_meeting_citation_ids = counMeetingCitationIds;
    }

    // end setCounMeetingCitationIds

}
