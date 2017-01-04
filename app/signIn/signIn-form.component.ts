import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { SignInUser } from './signIn-user';

@Component({
  moduleId: module.id,
  selector: 'signIn-form',
  templateUrl: './signIn.component.html'
})
export class SignInFormComponent {
  constructor(
    private router : Router,
    private location : Location
  ){}

  model = new SignInUser('', '');
  
  onSubmit() {
    console.log(this.model);
    this.router.navigate(['/content'])
  }

  toSignUp() {
    this.router.navigate(['/signUp'])
  }
}