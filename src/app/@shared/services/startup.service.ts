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
            zip(
                this.httpClient.get(`${environment.serverUrl}/api/syst-parameters/all`)
            )
                .pipe(
                    catchError((res) => {
                        console.warn(`StartupService.load: Network request failed`, res);
                        resolve();
                        return [];
                    }),
                )
                .subscribe(
                    ([parameters]) => {
                        this.storageLocal.set('parameters', parameters.data);
                    },
                    () => {},
                    () => {
                        resolve();
                    },
                );
        });
    }
}
