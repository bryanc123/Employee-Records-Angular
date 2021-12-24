import { tap, finalize } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpInterceptor, HttpHandler, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

    constructor(private router: Router) {}
    
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        let message: string;
        const d = new Date(Date.now());
        const date = d.toString();

        return next.handle(req)
            .pipe(
                tap(
                    event => message = event instanceof HttpResponse ? `Request to ${this.router.url} succeeded` : "Request to ${this.router.url} failed",
                    error => message = "Request to ${this.router.url} failed"
                ),
                finalize(() => {
                    message += ` on ${date}`
                    console.log(message);
                })
            )
    }
}