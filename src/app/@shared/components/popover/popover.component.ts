import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

    public currentPopover: any = null;

  constructor() { }

  ngOnInit() {}

    dismissPopover() {
        if (this.currentPopover) {
            this.currentPopover.dismiss().then(() => { this.currentPopover = null; });
        }
    }

}
