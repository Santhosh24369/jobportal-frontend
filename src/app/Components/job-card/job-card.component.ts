import { Component } from '@angular/core';
import { JobsService } from '../../jobs.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.css'
})
export class JobCardComponent {
jobs : any =[];
constructor(private jobsService:JobsService){
  this.jobsService.currentmessage.subscribe((job)=>{
    this.jobs = job.slice().reverse();
  })
}
}
