import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

const BASE_URL = environment.baseURL

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {

  constructor(
    private _http: HttpClient
  ) { }

  get<T>(url: string){
    return this._http.get<T[]>(BASE_URL + url)
  }

  post<T = any>(url: string, payload: T){
    return this._http.post(BASE_URL + url, payload)
  }

  put<T = any>(url: string, id: number, payload: T){
    return this._http.put(BASE_URL + url + "/" + id, payload)
  }

  delete(url: string, id: number){
    return this._http.delete(BASE_URL + url + "/" + id)
  }
}
