import { Injectable } from '@angular/core';
import { Plugins, CameraResultType, Capacitor, FilesystemDirectory,
  CameraPhoto, CameraSource } from '@capacitor/core';
import {ApiService} from "./api.service";
import {environment} from "../../../environments/environment";

const { Camera, Filesystem, Storage } = Plugins;

export interface Photo {
  filepath: string;
  webviewPath: string;
}

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  public photos: Photo[] = [];

  public environment = environment;

  constructor(
      public api: ApiService,
  ) { }

  /**
   *
   * @param fileableId
   * @param fileableType
   * @param type
   */
  public async addNewToGallery(fileableId = null, fileableType = null, type = null) {
      console.log(fileableId);
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    return await this.savePicture(capturedPhoto, fileableId, fileableType, type);
  }

  /**
   *
   * @param cameraPhoto
   * @param fileableId
   * @param fileableType
   * @param type
   * @private
   */
  private async savePicture(cameraPhoto: CameraPhoto, fileableId, fileableType, type) {
      console.log(fileableId);
    const response = await fetch(cameraPhoto.webPath!);
    const blob = await response.blob();

    const fileName = new Date().getTime() + '.jpeg';

    return await this.uploadFile(blob, fileName, fileableId, fileableType, type);
  }

  /**
   *
   * @param cameraPhoto
   * @private
   */
  private async readAsBase64(cameraPhoto: CameraPhoto) {

    const response = await fetch(cameraPhoto.webPath!);
    const blob = await response.blob();

    return await this.convertBlobToBase64(blob) as string;
  }

  /**
   *
   * @param file
   * @param fileName
   * @param fileableId
   * @param fileableType
   * @param type
   * @private
   */
  private async uploadFile(file, fileName, fileableId, fileableType, type) {
      console.log(fileableId);
    const endpoint = 'drive/upload';
    const formData: FormData = new FormData();
    formData.append('file', file, fileName);
    formData.append('fileable_id', fileableId);
    formData.append('type', type);
    formData.append('fileable_type', fileableType);
    return await this.api.post(endpoint, formData).toPromise();
  }

  /**
   *
   * @param blob
   */
  convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader;
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });
}
