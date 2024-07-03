import { Component } from '@angular/core';
import MAT_MODULES from '../../material';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/login/login.service';
import { Router } from '@angular/router';

const TEST_CREDENTIALS=  {
  email: "admin@example.com",
  password: "iamadmin"
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MAT_MODULES, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(
    private _fb: FormBuilder,
    private _login: LoginService,
    private _route: Router
  ){}

  form = this._fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]]
  })

  async logIn(){
    const { email, password } = this.form.value
    if(email && password){
      const isValid = await this._login.checkIfUserIsValid(email, password)
      if(isValid){
        this._route.navigateByUrl('/dashboard')
      }
    }
  }

  fillTestCredentials(){
    this.form.patchValue(TEST_CREDENTIALS)
  }
}
