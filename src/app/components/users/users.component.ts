import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Global } from '../../services/global';
import { User } from '../../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {
  public users: Array<User>;
  public URL: string;
  constructor(
    private _userService: UserService
  ) {
    this.URL = Global.URL_USERS;
  }

  ngOnInit(): void {
    this._userService.users().subscribe(
      response => {
        this.users = response.users;
        console.table(response.users);
      },
      error => {
        console.log(error);
      }
    );
  }

}
