import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class GeoLocationService {
    coordinates: any;

    constructor() {}

    public getPosition(): Observable<Position> {
        return Observable.create((observer: any) => {
            navigator.geolocation.watchPosition((pos: Position) => {
                observer.next(pos);
            }),
                () => {
                    console.log('Position is not available');
                },
                {
                    enableHighAccuracy: true,
                };
        });
    }
}
