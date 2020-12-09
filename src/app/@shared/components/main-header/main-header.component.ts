import {Component, Input, OnInit} from '@angular/core';
import {SIZE_TO_MEDIA} from '@ionic/core/dist/collection/utils/media';
import { Platform } from '@ionic/angular';
import {SplitPanelService} from "../../services/split-panel.service";

@Component({
    selector: 'app-main-header',
    templateUrl: './main-header.component.html',
    styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent implements OnInit {

    @Input('title') title = '';
    @Input('primaryLink') primaryLink = '';
    @Input('primaryIcon') primaryIcon = '';
    @Input('primaryText') primaryText = '';
    @Input('showSplitPanelButton') showSplitPanelButton = true;

    constructor(
        public platform: Platform,
        public splitPanel: SplitPanelService
    ) {
    }

    ngOnInit() {
        this.splitPanel.show.subscribe(res => {
            // console.log('Main Header Split panel show ' + res);
        });
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

}
