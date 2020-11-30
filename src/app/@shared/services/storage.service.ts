import { BehaviorSubject, Observable } from 'rxjs';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
// import * as CryptoJS from 'crypto-js';

declare var CryptoJS: any;

/**
 * Storage service
 * used for persist application data in observable key value pair
 */

@Injectable()
export class StorageService {

    private storage: Storage;
    private subjects: Map<string, BehaviorSubject<any>>;
    keySize = 256;
    ivSize = 128;
    iterations = 100;

    /**
     * Constructor with service injection
     * @param storage
     */
    constructor(storage: Storage) {
        this.storage = storage;
        this.subjects = new Map<string, BehaviorSubject<any>>();
    }

    encrypt(data: any) {
        return CryptoJS.AES.encrypt(JSON.stringify(data), environment.secretKey).toString();
    }

    decrypt (data: any) {
        const bytes = CryptoJS.AES.decrypt(data, environment.secretKey);
        if (bytes.toString()) {
            return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        }
        return data;
    }

    public getStorage() {
        let s = [];
        for (let i = 0; i < this.storage.length; i++) {
            s.push({
                key: atob(this.storage.key(i)),
                value: JSON.parse(this.decrypt(this.storage.getItem(this.storage.key(i))))
            });
        }
        return s;
    }

    /**
     * watch data of given key
     * @param key
     * @param defaultValue
     */
    watch(key: string): Observable<any> {
        key = btoa(key);
        if (!this.subjects.has(key)) {
            this.subjects.set(key, new BehaviorSubject<any>(null));
        }
        if (!this.storage.getItem(key)) {
            return undefined;
        }
        const value = this.decrypt(this.storage.getItem(key));
        let item = JSON.parse(value);
        if (item === "undefined") {
            item = undefined;
        } else {
            item = item;
        }
        this.subjects.get(key).next(item);
        return this.subjects.get(key).asObservable();
    }

    /**
     * get data of given key
     * @param key
     */
    get(key: string): any {
        key = btoa(key);
        if (!this.storage.getItem(key)) {
            return undefined;
        }
        const value = this.decrypt(this.storage.getItem(key));
        let item = JSON.parse(value);
        if (item === "undefined") {
            item = undefined;
        } else {
            item = item;
        }
        return item;
    }

    /**
     * set value on given key
     * @param key
     * @param value
     */
    set(key: string, value: any) {
        key = btoa(key);
        value = JSON.stringify(value);
        this.storage.setItem(key, this.encrypt(value));
        if (!this.subjects.has(key)) {
            this.subjects.set(key, new BehaviorSubject<any>(value));
        } else {
            this.subjects.get(key).next(value);
        }
    }

    /**
     * remove given key
     * @param key
     */
    remove(key: string) {
        key = btoa(key);
        if (this.subjects.has(key)) {
            this.subjects.get(key).complete();
            this.subjects.delete(key);
        }
        this.storage.removeItem(key);
    }

    /**
     * clear all available keys
     */
    clear() {
        this.subjects.clear();
        this.storage.clear();
    }
}
