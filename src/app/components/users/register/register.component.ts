import { Component, OnInit } from '@angular/core';
import { User, UserModel } from '../../../models/User';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user: User;
  public errors = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.user = new UserModel();
  }

  register() {
    this.userService.register(this.user).subscribe(
      data => {
        this.router.navigate(['/login', { M: 'REGISTERED' }]);
      },
      (invalidResponse: any) => {
        this.errors = invalidResponse.error.errors;
      }
    );
  }
}
