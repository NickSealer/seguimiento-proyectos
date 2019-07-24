import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiEstelarService {

  constructor(private http: HttpClient) { }

  private httpOptions = {headers: new HttpHeaders({'Private-Token': 'eoxXX76Pb4zFDgM16P1g', })};


  public milestones() {
    return this.http.get('https://gitlab.com/api/v4/projects/12937449/milestones', this.httpOptions).pipe(map(this.extractData));
  }

  public issues() {
    return this.http.get('https://gitlab.com/api/v4/projects/12937449/issues', this.httpOptions).pipe(map(this.extractData));
  }

  public milestone_id(id: string) {
    return this.http.get('https://gitlab.com/api/v4/projects/12937449/milestones/'+id+'/issues', this.httpOptions).pipe(map(this.extractData));
  }

  public milestone_quantity(name: string) {
    return this.http.get("https://gitlab.com/api/v4/projects/12937449/issues_statistics?milestone="+name, this.httpOptions).pipe(map(this.extractData));
  }

  public project() {
    return this.http.get('https://gitlab.com/api/v4/projects/12937449', this.httpOptions).pipe(map(this.extractData));
  }

  public projectIssueStatistics() {
    return this.http.get('https://gitlab.com/api/v4/projects/12937449/issues_statistics', this.httpOptions).pipe(map(this.extractData));
  }

  public milestone(id: string) {
  console.log(id);
  return this.http.get('https://gitlab.com/api/v4/projects/12937449/milestones/'+id+'/issues', this.httpOptions).pipe(map(this.extractData));
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
}
//12826304
