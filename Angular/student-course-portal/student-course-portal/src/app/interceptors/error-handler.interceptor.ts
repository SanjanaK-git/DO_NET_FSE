import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {

  const router = inject(Router);

  return next(req).pipe(

    catchError(error => {

      if(error.status === 401){

        router.navigate(['/']);

      }

      else if(error.status === 500){

        alert('Server error occurred');

      }

      return throwError(() => error);

    })

  );

};
