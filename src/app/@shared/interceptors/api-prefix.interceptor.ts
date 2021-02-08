import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../../environments/environment";

/**
 * Prefixes all requests not starting with `http[s]` with `environment.serverUrl`.
 */
@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {
    constructor() {
        console.log('API Prefix interceptor');
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        //if (!/^(http|https):/i.test(request.url)) {
        let newUrl = new URL(request.url);
        let params = new URLSearchParams(newUrl.search.slice(1));
        // params.append('XDEBUG_SESSION_START', '13274');
        request = request.clone({url: newUrl.toString().split('?')[0] + '?' + params.toString()});
        //}
        return next.handle(request);
    }
}
