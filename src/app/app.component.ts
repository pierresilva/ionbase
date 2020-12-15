import {Component, OnInit} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {LoadingService} from "./@shared/services/loading.service";
import {SplitPanelService} from "./@shared/services/split-panel.service";
import {AuthService} from "./@shared/services/auth.service";

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

    public dark = true;

    public selectedIndex = 0;

    public isLoading = false;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        public loading: LoadingService,
        public splitPanel: SplitPanelService,
        public auth: AuthService,
    ) {
        this.initializeApp();
        // this.splitPanel.show.next(false);

        this.splitPanel.show.subscribe(res => {
            // console.log('SplitPanel show ' + res);
        });
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    ngOnInit() {

        const path = window.location.pathname.split('folder/')[1];
        /*if (path !== undefined) {
            this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
        }*/

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

    updateDarkMode() {
        document.body.classList.toggle('dark', this.dark);
    }

    darkEnabled() {
        if (document.body.classList.contains('dark')) {
            return true;
        }

        return false;
    }

}
