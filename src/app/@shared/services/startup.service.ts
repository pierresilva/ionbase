import { Injectable } from '@angular/core';
import { zip } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {StorageLocalService} from "./storage-local.service";

@Injectable({
  providedIn: 'root'
})
export class StartupService {

  constructor(
      private httpClient: HttpClient,
      private storageLocal: StorageLocalService
  ) { }

    load(): Promise<void> {
        return new Promise((resolve) => {
            this.storageLocal.set('subdomain', '0001');
            const subdomain = this.storageLocal.get('subdomain');
            zip(
                this.httpClient.get(environment.serverUrl + '/api/setting-groups?all=true')
            )
                .pipe(
                    catchError((res) => {
                        console.warn(`StartupService.load: Network request failed`, res);
                        resolve();
                        return [];
                    }),
                )
                .subscribe(
                    ([settings]) => {
                        this.storageLocal.set('settings', settings.data);
                    },
                    () => {},
                    () => {
                        resolve();
                    },
                );
        });
    }
}
