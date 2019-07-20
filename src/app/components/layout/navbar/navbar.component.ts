import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public collapsed: boolean;

  constructor(public auth: UserService, public router: Router) {}

  ngOnInit() {}

  public logout(): void {
    this.auth.logout().subscribe(() => {
      this.router.navigate(['login']);
    });
  }

}
