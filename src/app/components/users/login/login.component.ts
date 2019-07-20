import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginData } from '../../../services/user.service';
import { MESSAGES } from '../../../helpers/message-types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginData: LoginData = {
    email: '',
    password: ''
  };

  public errors = [];

  public notifyMessage: string;

  constructor(private route: ActivatedRoute, private router: Router, private auth: UserService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.M) {
        this.notifyMessage = MESSAGES[params.M];
      }
    });
  }

  login(data) {
    this.auth.login(this.loginData).subscribe(
      validResponse => {
        this.router.navigate(['/']);
      },
      (invalidResponse: any) => {
        this.errors = invalidResponse.error.errors;
      }
    );
  }
}
