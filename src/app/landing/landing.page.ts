import {Component, OnInit} from '@angular/core';
import {SplitPanelService} from "../@shared/services/split-panel.service";
import {SettingsService} from "../@shared/services/settings.service";
import {AuthService} from "../@shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  slides: any[] = [];

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: (index, className) => {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    }
  };

  constructor(
      public splitPanel: SplitPanelService,
      public settings: SettingsService,
      public auth: AuthService,
      public router: Router
  ) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.splitPanel.show.next(false);
    if (this.auth.userIsLogged()) {
      this.router.navigateByUrl('/folder/inbox')
    }
  }



}
