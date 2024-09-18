import { Component, Input } from '@angular/core';
import { Jobs } from '../../shared/jobs/jobs';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [JobsComponent, NgFor],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent {
  @Input() job!: Jobs;
  // tags = this.job.tags;
}
