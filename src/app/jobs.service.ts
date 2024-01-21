import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  public jobsdata : any;
  private jobsmessagesource = new BehaviorSubject([]);
  currentmessage = this.jobsmessagesource.asObservable();
  constructor(private http: HttpClient) { }
  jobs(){
    this.http.get('https://localhost:7159/GetJobs').subscribe((data:any)=> {
    this.jobsdata = data;
    this.jobsmessagesource.next(this.jobsdata);
  });
  }
}
