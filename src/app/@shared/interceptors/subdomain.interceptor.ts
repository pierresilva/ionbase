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
    console.log('SubDomain Interceptor');
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const subdomain = this.storage.get('subdomain');
    if (subdomain) {
      request = request.clone({ setHeaders: { Subdomain: `${subdomain}` } });
    }
    return next.handle(request);
  }
}
