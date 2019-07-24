import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
authenticated:any= false;

  constructor(public auth: AuthenticationService) { }

  ngOnInit() {
    this.auth.authenticated.then(value => this.authenticated = value)
  }

}
