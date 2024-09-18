import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {
  searchTerm : string = '';

  constructor(activatedRoute:ActivatedRoute, private router:Router){
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) this.searchTerm = params.searchTerm;
      else this.searchTerm = '';
      // console.log("search"+this.searchTerm);
    })
  }


  search(term:string):void{
    if(term) 
      this.router.navigateByUrl('/search/'+term);
    else this.router.navigateByUrl('');
  }

}
