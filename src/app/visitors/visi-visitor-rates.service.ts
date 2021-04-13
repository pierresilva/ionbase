import { Injectable } from '@angular/core';
import {ApiService} from "../@shared/services/api.service";
import {AlertService} from "../@shared/services/alert.service";
import {ToastService} from "../@shared/services/toast.service";
import {Router} from "@angular/router";
import {NavigationService} from "../@shared/services/navigation.service";
import {AuthService} from "../@shared/services/auth.service";
import {VisiRate} from "./visi-rate";

@Injectable({
  providedIn: 'root'
})
export class VisiRatesService {

    public items: VisiRate[] = [];
    public item: VisiRate = {};

  constructor(
      public api: ApiService,
      public alert: AlertService,
      public toast: ToastService,
      public router: Router,
      private navigation: NavigationService,
      public authService: AuthService
  ) { }

  public getVisiRates() {
      this.api.get('visi-vehicle-types')
          .subscribe((res: any) => {
              this.item = res.data;
          });
  }
}
