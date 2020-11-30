import { Component, OnInit } from '@angular/core';
import { CameraOptions, Camera } from '@ionic-native/camera/ngx';
import {CameraService} from '../@shared/services/camera.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  public base64Image: any = null;


  constructor(
      private camera: CameraService
  ) { }

  ngOnInit() {
  }

  takePicture() {
    this.camera.addNewToGallery() ;
  }

}
