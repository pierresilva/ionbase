import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { LoadingService } from '../services/loading.service';
import { catchError, finalize } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import {ToastService} from "../services/toast.service";

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
    pendingRequests = 0;
    constructor(
        public loadingService: LoadingService,
        public toast: ToastService,
        // public translate: TranslateService,
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authReq = req.clone();

        this.track(true);

        return next.handle(authReq).pipe(
            catchError(this.handleError.bind(this)),
            finalize(() => {
                this.track(false);
            })
        );
    }

    handleError(error: any): Observable<any> {
        if (error.error.message) {
            if (environment.production === false) {
                // this.toast.showError(error.error.message, this.translate.instant('Some thing was wrong'));
                this.toast.present(error.error.message, 'toast-error');
            } else {
                // this.toast.showError('', this.translate.instant('Some thing was wrong'));
                this.toast.present('Algo salio mal', 'toast-error');
                console.error(error.error.message);
            }
        }

        if (error.error.errors) {
            for (let key in error.error.errors) {
                if (error.status === 422) {
                    let errorMessage = '';
                    // this.toast.showError(error.error.errors[key], null);
                    this.toast.present(error.error.errors[key], 'toast-error');
                }

                if (environment.production === false && error.status !== 422) {
                    // this.toast.showError(error.error[key][0], error.error.errors[key]);
                    this.toast.present(error.error[key][0], 'toast-error');
                }
            }
        }
        return throwError(error);
    }

    track(track: boolean): void {
        console.log(this.pendingRequests);
        if (track) {
            this.pendingRequests++;
        } else {
            this.pendingRequests--;
        }
        if (this.pendingRequests > 0) {
            this.loadingService.isLoading.next(true);
        } else {
            this.loadingService.isLoading.next(false);
        }
    }
}
