import { Injectable, Inject } from '@angular/core';
import { StorageService } from './storage.service';

/**
 * Session storage service
 * used for persist application data in observable key value pair
 */
@Injectable()
export class StorageSessionService extends StorageService {

    /**
     * Constructor with service injection
     * @param window
     */
    constructor(@Inject('WINDOW') private window: any) {
        super(window.sessionStorage);
    }
}
