import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import MAT_MODULES from '../../material';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RestraurantService } from '../../services/restraunt/restraurant.service';
import { IRestaurant } from '../../types/IRestaurant';

@Component({
  selector: 'app-restraurant-form',
  standalone: true,
  imports: [MAT_MODULES, ReactiveFormsModule],
  templateUrl: './restraurant-form.component.html',
  styleUrl: './restraurant-form.component.css'
})
export class RestraurantFormComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      isEdit: boolean,
      restraurant: IRestaurant
    },
    public dialogRef: MatDialogRef<RestraurantFormComponent>,
    private _fb: FormBuilder,
    private _restraurant: RestraurantService
  ){}

  form = this._fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    location: ['', Validators.required]
  })

  ngOnInit(): void {
    if(this.data.isEdit){
      this.form.patchValue(this.data.restraurant)
    }
  }

  submit(){
    let payload: IRestaurant = {
      name: this.form.value.name || '',
      description: this.form.value.description || '',
      location: this.form.value.location || ''
    }



    if(this.data.isEdit){
      payload = {
        ...payload,
        id: this.data.restraurant.id
      }
      this.edit(payload)
    }else{
      this.save(payload)
    }
  }

  save(payload: IRestaurant){
    this._restraurant.addNewRestraurant(payload).subscribe({
      next: (data) => {
        this.close(true)
      },

      error: (err) => {
      }
    })
  }

  edit(payload: IRestaurant){
    this._restraurant.editRestrurant(payload).subscribe({
      next: (data) => {
        this.close(true)
      },

      error: (err) => {
      }
    })
  }

  close(success: boolean = false){
    this.dialogRef.close(success)
  }
}
