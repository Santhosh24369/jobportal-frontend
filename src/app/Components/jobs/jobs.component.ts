import { Component, OnInit } from '@angular/core';
import { JobCardComponent } from '../job-card/job-card.component';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [JobCardComponent],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent implements OnInit{
constructor(private title : Title){}
ngOnInit(): void {
    this.title.setTitle('Search 4 Smart | Jobs');
}
}
