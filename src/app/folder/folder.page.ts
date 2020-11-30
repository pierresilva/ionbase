import {Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {IonSlides, Platform} from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;

  public folder: string;
  public slider: any;
  public slideOpts = {
    initialSlide: 0,
    slidesPerView: 4,
    loop: true,
    centeredSlides: true,
    spaceBetween: 0
  };

  constructor(
      private activatedRoute: ActivatedRoute,
      public platform: Platform
  ) {

    if (this.platform.width() < 1200) {
      this.slideOpts.slidesPerView = 2;
    }
    this.slider =
        {
          isBeginningSlide: true,
          isEndSlide: false,
          slidesItems: [
            {
              id: 324
            },
            {
              id: 321
            },
            {
              id: 435
            },
            {
              id: 524
            },
            {
              id: 235
            },
            {
              id: 236
            },
            {
              id: 237
            },
            {
              id: 238
            }
          ]
        };
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.platform.resize.subscribe(async () => {
      console.log(this.platform.width());
    });
  }

  // Move to Next slide
  slideNext(object, slideView) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  // Move to previous slide
  slidePrev(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  // Method called when slide is changed by drag or navigation
  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  // Call methods to check if slide is first or last to enable disbale navigation
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }

  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }


}
