import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignupRequestPayload } from './sign-up-request.payload';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signupRequestPayload: SignupRequestPayload;
  // Déclarations d'une variable de type FormGroup qui sera le point de départ pour gérer la validation du formulaire
  signupForm: FormGroup;

  constructor(private authService: AuthService, private router: Router,  private toastr: ToastrService) {
    this.signupRequestPayload = {
      username: '',
      email: '',
      password: ''
    };
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  signup() {
    this.signupRequestPayload.username = this.signupForm.get('username').value;
    this.signupRequestPayload.email = this.signupForm.get('email').value;
    this.signupRequestPayload.password = this.signupForm.get('password').value;

    this.authService.signup(this.signupRequestPayload).subscribe(
      next => {
      // On navigue vers le composant de login en lui faisant passer en paramètre un attribut "registred"  avec la valeur "true"
        this.toastr.info('Registration Success');
      this.router.navigate(['/login'], { queryParams: { registered: 'true' } });
    }, error => {
      this.toastr.error('Registration Failed! Please try again');
    });
  }

}
