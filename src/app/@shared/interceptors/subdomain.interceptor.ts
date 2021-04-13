import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {StorageLocalService} from "../services/storage-local.service";

@Injectable()
export class SubdomainInterceptor implements HttpInterceptor {

  constructor(
      private storage: StorageLocalService
  ) {
    console.log('SubDomain Interceptor', this.getSubdomain(window.location.hostname), window.location.hostname);
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const subdomain = this.storage.get('subdomain');
    if (subdomain) {
      request = request.clone({ setHeaders: { Subdomain: `${subdomain}` } });
    }
    return next.handle(request);
  }

    getSubdomain(hostname) {
        let regexParse = new RegExp('[a-z\-0-9]{2,63}\.[a-z\.]{2,5}$');
        let urlParts = regexParse.exec(hostname);
        return hostname.replace(urlParts[0],'').slice(0, -1);
    }
}
