import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { ContactInfo } from '../models/models';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html'
})
export class DisplayUsersComponent implements OnInit {

  showContacts: ContactInfo;
  noContactsMessage: string;
  message: string;
  isContactAvailable  = false;

  constructor(private userservice: UserService, private router: Router) { }

  ngOnInit() {
    this.displayContacts();
  }

  displayContacts() {
    this.userservice.getContact().subscribe((res) => {
      // console.log(res);
      if (res.length === 0) {
        this.isContactAvailable  = false;
        this.noContactsMessage = ' No Contacts available please add contacts';
      } else {
        this.isContactAvailable  = true;
        this.showContacts = res;
      }

    }, (err) => {
      console.log(err);
    });

  }

  deleteContact(contact) {

    this.userservice.deleteContactFromList(contact.contactname).subscribe((res) => {
       alert('Do you want to delete contact');
       this.message = 'Contact deleted succesfully';

    //     for (let i = 0 ; i <= res.length; i++ ) {
    //       console.log(res[i]);
    //       if (contact.contactname === res[i].contactname) {
    //         console.log('ib');
    //           res.splice(i, 1);
    //       }

    //  }
      if (res.length === 0) {

      }
    });

  }

  editcontact(editcontact) {
    this.userservice.editContactFromList(editcontact).subscribe((res) => {
      this.router.navigate(['/contact/add']);
    });
  }
}
