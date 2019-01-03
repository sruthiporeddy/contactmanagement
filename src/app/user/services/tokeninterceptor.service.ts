import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable()
export class TokeninterceptorService implements HttpInterceptor {
  constructor() {
    console.log('iN toke interceptor');
  }
  intercept(req, next) {
    const usertoken = localStorage.getItem('tokenUser');
    if (usertoken) {
      const tokenizedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${usertoken}`
        }
      });
      return next.handle(tokenizedReq);
    }
    return next.handle(req);
  }
}
