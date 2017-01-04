import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { SignUpUser } from './signUp-user'

@Component({
    moduleId: module.id,
    selector: 'signUp-form',
    templateUrl: './signUp.component.html'
})

export class SignUpFormComponent {

    constructor(
        private router : Router
    ){}

    model = new SignUpUser('', '', '');

    onCreate() {
        console.log(this.model)
        this.router.navigate(['/signIn'])
    }

    goBack() {
        this.router.navigate(['/signIn'])
    }
}