import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { ApiEstelarService } from '../services/api-estelar.service';
import { Router } from '@angular/router';
import _get from "lodash/get";

@Component({
  selector: 'app-estelar',
  templateUrl: './estelar.component.html',
  styleUrls: ['./estelar.component.scss']
})
export class EstelarComponent implements OnInit {
  project: any = '';
  statistics: any = [];
  milestones: any = [];
  arraydata: any = [];
  data: any;
  milestoneObject: any = [];
  dataProject: any;
  milestoneData: any;
  issuesState: any = [];
  uniqueTitle: any = [];
  uniqueMilestone: any = [];
  colors = ['#FF6384', '#36A2EB', '#FFCE56', '#DC3912', '#FF9900', '#109618', '#990099', '#3B3EAC',
    '#0099C6', '#DD4477', '#3B3EAC', '#5574A6', '#316395', '#994499', '#22AA99', '#AAAA11',
    '#6633CC', '#E67300', '#8B0707', '#329262', '#B82E2E', '#66AA00'];


  constructor(
    public auth: AuthenticationService,
    private api: ApiEstelarService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getMilestones();
    this.getProject();
    const names = this.getMilestonesNames();
    // console.log(this.getIssues("918441"));
  }

  getStatistics(id: string) {
    this.api.milestone(id).subscribe(result => {
      this.statistics = result;
      console.log(result);
    })
  }

  getProject() {
    this.api.project().subscribe(result => {
      this.project = result;
    })
  }

  getMilestones() {
    var arrayTitle = [];
    var arraId = [];
    var quantity = [];

    var distinct = (value, index, self) => {
      return self.indexOf(value) === index;
    };

    this.api.milestones().subscribe((result) => {
      this.milestones = result;
      this.milestones.forEach(function(value) {
        arrayTitle.push(value['title']);
        arraId.push(value['id']);
      });
      this.uniqueTitle = arrayTitle.filter(distinct);
      this.uniqueMilestone = arraId.filter(distinct);

      Promise.all(this.uniqueTitle.map(result => this.quantity_promise(result)))
        .then(list => {
          for (let i = 0; i < list.length; i++) {
            const element: any = list[i];
            quantity.push({ id: this.uniqueMilestone[i], title: this.uniqueTitle[i], count: element.statistics.counts.all });
          }
          const toSend = quantity.sort((a, b) => b.count - a.count)
          this.doughnut_chart(toSend.map(x => x.title), toSend.map(x => x.count));
          this.arraydata = toSend;
        })
        .catch(err => console.error(err));
    });
  }

  quantity_promise(title) {
    return new Promise((resolve, reject) => {
      this.api.milestone_quantity(title).subscribe(resolve, reject)
    })
  }

  doughnut_chart(labels, values) {
    this.dataProject = {
      labels: labels,
      datasets: [
        {
          data: values,
          backgroundColor: this.colors,
          hoverBackgroundColor: this.colors
        }]
    };
  }

  public getMilestonesNames() {
    const arrayTitle = [];
    this.api.milestones().subscribe((respond) => {
      this.milestones = respond;
      this.milestones.forEach(function(milestoneTitle) {
        arrayTitle.push(milestoneTitle['title']);
      });
    });
    return arrayTitle;
  }

  public getMilestonesIds() {
    const arrayId = [];
    this.api.milestones().subscribe((respond) => {
      this.milestones = respond;
      this.milestones.forEach(function(milestoneTitle) {
        arrayId.push(milestoneTitle['id']);
      });
    });
    return arrayId;
  }

  public getMilestone(id: string) {
    this.api.milestone(id).subscribe(
      result => {
        this.getMilestoneStatus(result);
      });
  }

  getMilestoneStatus(data) {
    let array1 = [];
    let arrayState = [];
    let array2 = [];
    var opened = 0;
    var closed = 0;

    for (var a = 0; a < data.length; a++) {
      arrayState.push(data[a]['state']);
      this.issuesState.push({ title: data[a]['title'], state: data[a]['state'] })
    }

    for (var q = 0; q < arrayState.length; q++) {
      if (arrayState[q] == 'opened') {
        opened++;
      }
      else if (arrayState[q] == 'closed') {
        closed++
      }
    }
    array2.push({ opened, closed });
    //paint pie
    this.data = {
      labels: ['Opened Issues', 'Closed Issues'],
      datasets: [
        {
          data: [array2.map(x => x.opened), array2.map(x => x.closed)],
          backgroundColor: ['#B82E2E', '#66AA00'],
          hoverBackgroundColor: ['#B82E2E', '#66AA00']
        }]
    };
  }

  // events on slice click
  public selectData(e: any): void {
    const title = _get(e, 'element._model.label')
    if (title) {
      this.milestoneObject = this.arraydata.find(elm => elm.title === title)
      this.getMilestone(this.milestoneObject.id)
      this.issuesState = [];
      this.getStatistics(this.milestoneObject.id);
    }
  }

  public getIssuesState(e: any): void {

    console.log();
  }


}
