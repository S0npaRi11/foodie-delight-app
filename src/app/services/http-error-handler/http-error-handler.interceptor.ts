import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, of } from 'rxjs';

export const httpErrorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
        switch(err.status){
          case 400:
            break
          case 401:
            break
          case 404:
            break
          case 500:
            break
          default:
           break
        }
      throw err;
    })
  );
};
