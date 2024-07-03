import { Injectable } from '@angular/core';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { BaseHttpService } from '../base-http/base-http.service';
import { LOCAL_STORAGE_KEY } from '../../constants/local-storage';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isLoggedIn$ = new BehaviorSubject(false)

  constructor(
    private _baseHttp: BaseHttpService,
    private _router: Router
  ) { }

  async checkIfUserIsValid(email: string, password: string){
      const admins: any[] | null = await this.queryUsers()
      if(!admins || !admins.length){
        return false
      }

      const required = admins.find(admin => admin.email === email && admin.password === password)

      if(!required) return false

      this.isLoggedIn$.next(true)
      localStorage.setItem(LOCAL_STORAGE_KEY.USER, JSON.stringify(required))
      return true
  }

  logout(){
    localStorage.removeItem(LOCAL_STORAGE_KEY.USER)
    this.isLoggedIn$.next(false)
    this._router.navigateByUrl('/')
  }

  private queryUsers(){
    return lastValueFrom<any[]>(this._baseHttp.get('admin'))
  }
}
