import {Component, Input, OnInit} from '@angular/core';
import {HousUnit} from "../../hous-units/hous-unit";

@Component({
  selector: 'app-corr-postboxes-item',
  templateUrl: './corr-postboxes-item.component.html',
  styleUrls: ['./corr-postboxes-item.component.scss'],
})
export class CorrPostboxesItemComponent implements OnInit {

  @Input('houseUnits') housUnits: HousUnit[];
  @Input('parent') parent: HousUnit;

  constructor() {
  }

  ngOnInit() {}

  hasReceived(corr_packets) {
    let response = false;
    for (let i = 0; i < corr_packets.length; i++) {
      if (corr_packets[i].status == 'received') {
        response = true;
        return response;
      }
    }
    return response;

  }

}
