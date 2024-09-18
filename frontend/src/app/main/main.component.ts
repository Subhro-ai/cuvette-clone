import { Component } from '@angular/core';
import { JobsComponent } from './jobs/jobs.component';
import { Jobs } from '../shared/jobs/jobs';
import { JobService } from '../services/job.service';
import { NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [JobsComponent, NgFor],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  jobs: Jobs[]=[];

  constructor(private jobService : JobService, activatedRoute:ActivatedRoute) {
    let jobsObservable: Observable<Jobs[]>;
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        jobsObservable = this.jobService.getAllJobsBySearchTerm(params.searchTerm);
      }
      else if (params.filter) {
        jobsObservable = this.jobService.getAllJobsByFilter(params.filter);
        // console.log(typeof Number((params.filter.split("&&")[1])));
      }
      else jobsObservable = this.jobService.getAll();

      jobsObservable.subscribe((serverJobs) =>{
        this.jobs = serverJobs;
      })
    });
    // this.jobs = jobService.getAll();
    // console.log(this.jobs);
  }

  
}
