import { Component, OnInit } from '@angular/core';
import { User } from '../models/models';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  userModel: any = {};
  errorMessage: string;
  constructor(private userService: UserService,
      private router: Router) { }

  ngOnInit() {
  }

  onsubmit() {
    console.log('hi');
    this.userService.addregisteredUser(this.userModel).subscribe((res) => {
       console.log(res);
      this.router.navigate(['/login']);
    }, (err) => {
        if (err === 400) {
          return this.errorMessage = 'Email should be unique and password length is min 6';
        }
         this.errorMessage = 'Invalid user';
    });
  }

}
