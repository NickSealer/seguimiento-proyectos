import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { ApiEstelarService } from '../services/api-estelar.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tars',
  templateUrl: './tars.component.html',
  styleUrls: ['./tars.component.scss']
})
export class TarsComponent implements OnInit {

  issues:any = [];
  milestones:any = [];
  values:any = [];
  label: any = [];
  porcent:string;
  pieChartLabels:string[];
  pieChartData:number[];
  pieChartType:string = 'pie';


  constructor(
    public auth: AuthenticationService,
    private api:ApiEstelarService,
    private router:Router
    ) {
    }

  ngOnInit() {


    const arraytitle = [];
    const arraydata = [];
    const res = [];
    let open = 0;
    let close = 0;

    this.api.milestones().subscribe((mile)=>{
    this.milestones = mile;

    this.milestones.forEach(function (mileValue) {
          // if(value.state === 'opened') {
          //   open++;
          // } else {
          //   close++;
          // }

      console.log(mileValue);
      arraytitle.push(mileValue['title']);
      arraydata.push(mileValue['iid']);
      });
    });

    this.api.issues().subscribe((res)=>{
      this.issues = res;
      this.issues.forEach(function (value) {
      if(value.milestone['iid'] === this.mileValue['id']){
      }
      console.log(value.milestone['iid']);
    });
  });

    this.pieChartLabels = arraytitle;
    this.pieChartData = arraydata;



  }
    // events on slice click
    public chartClicked(e:any):void {
      // this.router.navigate(['graphs']);
      console.log(e);
    }

   // event on pie chart slice hover
    public chartHovered(e:any):void {
      console.log(e);
    }
}
