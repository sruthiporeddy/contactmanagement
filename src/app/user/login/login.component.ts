import { Component, OnInit } from '@angular/core';
import { UserRegistered } from '../models/models';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  errorMessage: string;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onlogin(form) {
    // console.log(form.value);
    this.userService.loginUser(form.value).subscribe((res) => {
       localStorage.setItem('tokenUser', res.token);
       this.router.navigate(['/contact/display']);

    }, (err) => {
        this.errorMessage = 'Invalid user';
        console.log(err);
    });
  }
}
