import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.paramMap)
    console.log(this.route.snapshot.queryParamMap)
  }
}
