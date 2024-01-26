import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userdata : any;
  private messagesource = new BehaviorSubject('Default');
  currentmessage = this.messagesource.asObservable();
  constructor(private http: HttpClient,private router: Router) {}

  Login(verifyuser:any){
    this.http.post("https://localhost:7159/login",verifyuser).subscribe
   ((res:any)=>{
     this.userdata = res;
     if(this.userdata){
      this.messagesource.next(this.userdata);
       this.router.navigateByUrl('/');
     }else{
       alert("Invalid Email or Password");
     }
   });
}
}
