import {Injectable} from '@angular/core';
import {ApiService} from "../@shared/services/api.service";
import {ToastService} from "../@shared/services/toast.service";
import {AlertService} from "../@shared/services/alert.service";
import {AuthService} from "../@shared/services/auth.service";
import {StorageLocalService} from "../@shared/services/storage-local.service";
import {SettingGroup} from "./setting-group";
import {Setting} from "../settings/setting";

@Injectable({
    providedIn: 'root'
})
export class SettingGroupsService {

    public settingGroups: SettingGroup[];
    public settingGroup: SettingGroup;

    public search: string = '';
    public searchId: string = '';
    public searchName: string = '';
    public searchCode: string = '';
    public searchSettingsName: string = '';
    public searchSettingsCode: string = '';

    constructor(
        public api: ApiService,
        public toast: ToastService,
        public alert: AlertService,
        public auth: AuthService,
    ) {
        //
        this.newSettingGroup();
        this.settingGroups = [];
    }

    /**
     * Get SettingGroups
     * @param page
     */
    public getSettingGroups(page: any = 1) {
        const searchString = this.search ? `&q[name:cont]=${this.search}&q[code:cont]=${this.search}&q[settings.name:cont]=${this.search}&q[settings.code:cont]=${this.search}` : '';
        this.api.get(`setting-groups?page=${page}${searchString}`)
            .subscribe(
                (res: any) => {
                    this.settingGroups = res.data;
                }
            );
    }

    /**
     * Get SettingGroups
     * @param code
     */
    public getSettingGroup(code: any) {
        this.api.get(`setting-groups/${code}`)
            .subscribe(
                (res: any) => {
                    this.settingGroup = res.data;
                }
            );
    }

    /**
     * Save SettingGroups
     */
    public saveSettingGroup() {
        if (this.settingGroup.id) {
            this.updateSettingGroup();
        }

        if (!this.settingGroup.id) {
            this.storeSettingGroup();
        }
    }

    /**
     * Store SettingGroup
     */
    private storeSettingGroup() {
        this.api.post('setting-groups', this.settingGroup)
            .subscribe(
                (res: any) => {
                    this.toast.present(res.message, 'toast-success');
                    this.getSettingGroups();
                },
                (err: any) => {

                }
            );
    }

    /**
     * Update SettingGroup
     */
    private updateSettingGroup() {
        this.api.put(`setting-groups/${this.settingGroup.code}`, this.settingGroup)
            .subscribe(
                (res: any) => {
                    this.toast.present(res.message, 'toast-success');
                    this.getSettingGroups();
                },
                (err: any) => {

                }
            );
    }

    /**
     * Delete SettingGroup
     * @param settingGroup
     */
    public deleteSettingGroup(settingGroup: SettingGroup) {
        this.alert.confirmation(`Eliminar ${settingGroup.name}?`)
            .then(res => {
                if (res) {
                    this.api.delete(`setting-groups/${settingGroup.code}`, {})
                        .subscribe(
                            (res: any) => {
                                this.toast.present(res.message, 'toast-success');
                                this.getSettingGroups();
                            },
                            (err: any) => {

                            }
                        );
                }
            });
        return;
    }

    /**
     * Create empty SettingGroup
     */
    newSettingGroup() {
        this.settingGroup = {
            id: null,
            name: null,
            code: null,
            created_at: null,
            updated_at: null,
            settings: [],
        };
    }

}
