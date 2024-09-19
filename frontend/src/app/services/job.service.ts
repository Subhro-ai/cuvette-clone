import { inject, Injectable } from '@angular/core';
import { Jobs } from '../shared/jobs/jobs';
import { sample_jobs } from '../../data';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { JOBS_FILTER, JOBS_SEARCH, JOBS_URL } from '../shared/constants/urls';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http:HttpClient) { }

    // http = inject(provideHttpClient);
  getAll(): Observable<Jobs[]> {
    return this.http.get<Jobs[]>('https://cuvette-clone.onrender.com/api/jobs/')
  }

  getAllJobsBySearchTerm(searchTerm:string) {
    // return this.getAll().filter(jobs => jobs.jobName.toLowerCase().includes(searchTerm.toLowerCase()));
    return this.http.get<Jobs[]>('https://cuvette-clone.onrender.com/api/jobs/search/' + searchTerm);
  }


  
  getAllJobsByFilter(filterTerm:string) : Observable<Jobs[]>{
    return this.http.get<Jobs[]>('https://cuvette-clone.onrender.com/api/jobs/filter/'+ filterTerm);
  }
  
}

// getAllJobsByExperience(experience:string) {
// if (experience == "less")
//   return this.getAll().filter(job => job.experience < 3);
// else
// return this.getAll().filter(job => job.experience >= 3);
// }

// getAllJobsBySalary(salary:number){
//   return this.getAll().filter(job => job.jobOffer[0] >= salary);
// }
// return this.getAll().filter(job => {
//   const experienceCondition = experience === "less" ? job.experience < 3 : job.experience >= 3;
//   const salaryCondition = job.jobOffer[0] >= salary;
//   console.log(salaryCondition, salary, job.jobOffer[0]);
//   return experienceCondition && salaryCondition;
  
// });