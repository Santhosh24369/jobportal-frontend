import { Component } from '@angular/core';
import { JobsService } from '../../jobs.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth.service';
import { HttpClient , HttpClientModule} from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { MomentModule } from 'ngx-moment';
@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterLink,MomentModule],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.css'
})
export class JobCardComponent {
jobs : any =[];
organdata:any;
constructor(private jobsService:JobsService,private http: HttpClient){
  this.jobsService.currentmessage.subscribe((job)=>{
    this.jobs = job.slice().reverse();
  })
}
organization(id:string){

  this.http.get("https://localhost:7159/Organization/"+id).subscribe((data:any)=> {
    this.organdata = data;
    return this.organdata;
});
}

}
