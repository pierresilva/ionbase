import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Router} from '@angular/router';
import {environment} from "../../../environments/environment";

@Injectable()

/**
 * Call Backend Http request service
 */
export class ApiService implements OnInit {
    token: string = '';

    data: any = null;

    constructor(
        private http: HttpClient,
        private router: Router,
    ) {
    }

    ngOnInit() {
    }

    /**
     * GET Http request to promise
     *
     * @param path
     */
    async syncGet(path: string) {
        const promise = new Promise((resolve, reject) => {
            this.http
                .get<any>(path)
                .toPromise()
                .then(
                    (res: any) => {
                        // Success
                        resolve(res);
                    },
                    (err: any) => {
                        // Error
                        reject(err);
                    }
                );
        });
        return await promise;
    }

    /**
     * POST Http request to promise
     *
     * @param path
     * @param body
     */
    async syncPost(path: string, body: any) {
        const promise = new Promise((resolve, reject) => {
            this.http
                .post<any>(path, body)
                .toPromise()
                .then(
                    (res: any) => {
                        // Success
                        resolve(res);
                    },
                    (err: any) => {
                        // Error
                        reject(err);
                    }
                );
        });
        return await promise;
    }

    /**
     * PUT Http request to promise
     *
     * @param path
     * @param body
     */
    async syncPut(path: string, body: any) {
        const promise = new Promise((resolve, reject) => {
            this.http
                .post<any>(path, body)
                .toPromise()
                .then(
                    (res: any) => {
                        // Success
                        resolve(res);
                    },
                    (err: any) => {
                        // Error
                        reject(err);
                    }
                );
        });
        return await promise;
    }

    /**
     * DELETE Http request to promise
     *
     * @param path
     * @param body
     */
    async syncDelete(path: string, body: any) {
        const promise = new Promise((resolve, reject) => {
            this.http
                .post<any>(path, body)
                .toPromise()
                .then(
                    (res: any) => {
                        // Success
                        resolve(res);
                    },
                    (err: any) => {
                        // Error
                        reject(err);
                    }
                );
        });
        return await promise;
    }

    /**
     * GET Http Request
     *
     * @param {string} path
     * @param {HttpParams} params
     * @returns {Observable<any>}
     */
    get(path: string, params: any = {}) {
        return this.http.get<any>(`${environment.serverUrl}/api/${path}`, params);
    }

    /**
     * GET Http Request. External
     *
     * @param {string} path
     * @param {HttpParams} params
     * @returns {Observable<any>}
     */
    getFull(path: string, params: any): Observable<any> {
        return this.http.get<any>(`${path}`, params);
    }

    /**
     * PUT Http Request
     *
     * @param {string} path
     * @param {Object} body
     * @returns {Observable<any>}
     */
    put(path: string, body: any): Observable<any> {
        return this.http.put<any>(`${environment.serverUrl}/api/${path}`, body);
    }

    /**
     * POST Http Request
     *
     * @param {string} path
     * @param {object} body
     * @returns {Observable<any>}
     */
    post(path: string, body: object): Observable<any> {
        return this.http.post<any>(`${environment.serverUrl}/api/${path}`, body);
    }

    /**
     * DELETE Http Request
     *
     * @param {string} path
     * @returns {Observable<any>}
     */
    delete(path: string, body: any): Observable<any> {
        return this.http.delete<any>(`${environment.serverUrl}/api/${path}`, body);
    }
}
