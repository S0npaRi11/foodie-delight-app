import { Component, OnInit } from '@angular/core';
import MAT_MODULES from '../../material';
import { RestraurantService } from '../../services/restraunt/restraurant.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { RestraurantFormComponent } from '../restraurant-form/restraurant-form.component';
import { AsyncPipe } from '@angular/common';
import { IRestaurant } from '../../types/IRestaurant';
import { RestraurantCardComponent } from '../restraurant-card/restraurant-card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MAT_MODULES, AsyncPipe, RestraurantCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent  implements OnInit{

  allRestraurants$ = new Observable<IRestaurant[]>()

  constructor(
    private _restraurant: RestraurantService,
    private _dialog: MatDialog
  ){}

  ngOnInit(): void {
    this.allRestraurants$ = this._restraurant.getAllRestraurants()
  }

  openRestraurantForm(isEdit: boolean){
    this._dialog.open(RestraurantFormComponent, {
      data: {
        isEdit
      }
    })
      .afterClosed().subscribe({
        next: (success) => {
          if(success) this.allRestraurants$ = this._restraurant.getAllRestraurants()
        }
      })
  }

  handleDelete(id: number){
    this._restraurant.deleteRestraurant(id).subscribe({
      next: (data) => {
        this.allRestraurants$ = this._restraurant.getAllRestraurants()
      },

      error: (err) => {
      }
    })
  }

  handleEdit(item: IRestaurant){
    this._dialog.open(RestraurantFormComponent, {
      data: {
        isEdit: true,
        restraurant: item
      }
    })
      .afterClosed().subscribe({
        next: (success) => {
          if(success) this.allRestraurants$ = this._restraurant.getAllRestraurants()
        }
      })
  }
}
