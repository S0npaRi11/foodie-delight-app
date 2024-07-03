import { Injectable } from '@angular/core';
import { BaseHttpService } from '../base-http/base-http.service';
import { IRestaurant } from '../../types/IRestaurant';

@Injectable({
  providedIn: 'root'
})
export class RestraurantService {

  constructor(
    private _baseHttp: BaseHttpService
  ) { }

  getAllRestraurants(){
    const url = 'restaurant'
    return this._baseHttp.get<IRestaurant>(url)
  }

  addNewRestraurant(restraurant: IRestaurant){
    const url = 'restaurant'
    return this._baseHttp.post(url, restraurant)
  }

  deleteRestraurant(id: number){
    const url = 'restaurant'
    return this._baseHttp.delete(url, id)
  }

  editRestrurant(restraurant: IRestaurant){
    const url = 'restaurant'
    return this._baseHttp.put(url, restraurant.id!,restraurant)
  }
}
