import {Injectable} from '@angular/core';
import {ApiService} from "../@shared/services/api.service";
import {ToastService} from "../@shared/services/toast.service";
import {AlertService} from "../@shared/services/alert.service";
import {AuthService} from "../@shared/services/auth.service";
import {Setting} from "./setting";

@Injectable({
    providedIn: 'root'
})
export class SettingsService {

    public search: string = '';

    public settings: Setting[];
    public setting: Setting;

    constructor(
        public api: ApiService,
        public toast: ToastService,
        public alert: AlertService,
        public auth: AuthService,
    ) {
    }

    /**
     * Get Settings
     * @param page
     */
    public getSettings(page: any = 1) {
        const searchString = this.search ? `&q[name:cont]=${this.search}&q[code:cont]=${this.search}&q[group.name:cont]=${this.search}&q[group.code:cont]=${this.search}` : '';
        this.api.get(`settings?page=${page}${searchString}`)
            .subscribe(
                (res: any) => {
                    this.settings = res.data;
                }
            );
    }

    /**
     * Get Settings
     * @param code
     */
    public getSetting(code: any) {
        this.api.get(`settings/${code}`)
            .subscribe(
                (res: any) => {
                    this.setting = res.data;
                }
            );
    }

    /**
     * Save Settings
     */
    public saveSetting() {
        if (this.setting.id) {
            this.updateSetting();
        }

        if (!this.setting.id) {
            this.storeSetting();
        }
    }

    /**
     * Store Setting
     */
    private storeSetting() {
        this.api.post('settings', this.setting)
            .subscribe(
                (res: any) => {
                    this.toast.present(res.message, 'toast-success');
                    this.getSettings();
                },
                (err: any) => {

                }
            );
    }

    /**
     * Update Setting
     */
    private updateSetting() {
        this.api.put(`settings/${this.setting.code}`, this.setting)
            .subscribe(
                (res: any) => {
                    this.toast.present(res.message, 'toast-success');
                    this.getSettings();
                },
                (err: any) => {

                }
            );
    }

    /**
     * Delete Setting
     * @param setting
     */
    public deleteSetting(setting: Setting) {
        this.alert.confirmation(`Eliminar ${setting.name}?`)
            .then(res => {
                if (res) {
                    this.api.delete(`settings/${setting.code}`, {})
                        .subscribe(
                            (res: any) => {
                                this.toast.present(res.message, 'toast-success');
                                this.getSettings();
                            },
                            (err: any) => {

                            }
                        );
                }
            });
        return;
    }

    /**
     * Create empty Setting
     */
    newSetting() {
        this.setting = {
            id: null,
            created_at: null,
            updated_at: null,
            setting_group_id: null,
            name: null,
            code: null,
            value: null,
            rich_text: null,
            group: {},
        };
    }
}
