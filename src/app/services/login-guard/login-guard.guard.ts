import { CanActivateFn, Router } from '@angular/router';
import { LOCAL_STORAGE_KEY } from '../../constants/local-storage';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const loggedUser = localStorage.getItem(LOCAL_STORAGE_KEY.USER)

  if(!loggedUser){
    return router.createUrlTree(['/'])
  }

  return !!loggedUser
};
