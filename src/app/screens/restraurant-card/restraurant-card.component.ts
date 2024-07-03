import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IRestaurant } from '../../types/IRestaurant';
import MAT_MODULES from '../../material';

@Component({
  selector: 'app-restraurant-card',
  standalone: true,
  imports: [MAT_MODULES],
  templateUrl: './restraurant-card.component.html',
  styleUrl: './restraurant-card.component.css'
})
export class RestraurantCardComponent {
  @Input() restraurant: IRestaurant | null = null

  @Output() delete = new EventEmitter<number>()
  @Output() edit = new EventEmitter<IRestaurant>()


  onEditClick(){
    if(this.restraurant){
      this.edit.emit(this.restraurant)
    }
  }

  onDeleteClick(){
    if(this.restraurant){
      this.delete.emit(this.restraurant.id)
    }
  }
}
