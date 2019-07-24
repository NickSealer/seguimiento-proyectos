import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AuthenticationService } from '../services/authentication.service';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  issues: any = [];
  project: any = [];
  holcim: any = [];

  constructor(public auth: AuthenticationService,private api:ApiService) { }

  ngOnInit() {
    this.api.estelar().subscribe((respond)=>{
      this.project = respond;
      console.log(respond);
    });

    this.api.holcim().subscribe((respond)=>{
      this.holcim = respond;
      console.log(respond);
    });

  }
}
