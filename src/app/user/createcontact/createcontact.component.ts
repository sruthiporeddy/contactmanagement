import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactInfo } from '../models/models';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-createcontact',
  templateUrl: './createcontact.component.html'
})
export class CreatecontactComponent implements OnInit {
  // contactInfo: any = {};
  addContactMess: string;
  constructor(private userService: UserService,
   private router: Router) { }

  ngOnInit() {
  }

  addcontact(contact) {
    this.userService.createContact(contact.value).subscribe((result) => {
      console.log(result);
      this.router.navigate(['/contact/display']);
      // console.log(result);
    }, (err) => {
      console.log(err);
      this.addContactMess = 'Error in creating contact';
    });
  }

}
