import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { LoginRequestPayload } from './login-request.payload';
import {ToastrService} from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import {paths} from "../../../environments/environment";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginRequestPayload: LoginRequestPayload;
  isError: boolean;

  constructor(private authService: AuthService,
              private toastr: ToastrService,
              private activatedRoute: ActivatedRoute,
              private router: Router,) {
    this.loginRequestPayload = {
      username: '',
      password: ''
    };
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  login() {
    this.loginRequestPayload.username = this.loginForm.get('username').value;
    this.loginRequestPayload.password = this.loginForm.get('password').value;
    this.authService.login(this.loginRequestPayload).subscribe(
      next => {
        this.router.navigateByUrl(paths.home)
        this.toastr.info('Login Success');
        this.isError = false;
      },
      error => {
        this.toastr.error('User does\'nt exist or isn\'t enabled');
        this.isError = true;
      }
    );
  }

}
