import { Injectable } from '@angular/core';
import {StorageLocalService} from "./storage-local.service";

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(
      public storage: StorageLocalService
  ) { }


  getGroup(groupCode: string) {
    const settings = this.storage.get('settings');

    for (let i = 0; i < settings.length; i++) {
      if (settings[i].code == groupCode) {
        return settings[i];
      }
    }

    return null;
  }

  getSetting(settingCode: string) {

    const settings = this.storage.get('settings');

    for (let i = 0; i < settings.length; i++) {
      for (let j = 0; j < settings[i].settings.length; j++) {
        if (settings[i].settings[j].code == settingCode) {
          return settings[i].settings[j].value;
        }
      }
    }

    return null;
  }

}
