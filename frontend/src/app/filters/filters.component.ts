import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
  sliderValue: number = 0;
  experience:string = '';
  filterTerm = this.experience+'&&'+this.sliderValue;

  constructor(activatedRoute:ActivatedRoute, private router:Router){
    activatedRoute.params.subscribe((params) => {
      if (params.filter) this.filterTerm = params.filterTerm;
    })
  }
  clear() {
    this.router.navigateByUrl('/');
  }
  applyFilter(sal: string, exp:string) {
    this.router.navigateByUrl('/filter/'+exp+'&&'+sal);
  }
}
