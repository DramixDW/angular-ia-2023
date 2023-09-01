import { Component } from '@angular/core';
import { Citation, CitationsService } from '../citations.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-citations',
  templateUrl: './citations.component.html',
  styleUrls: ['./citations.component.css']
})
export class CitationsComponent {
  declare citations: Citation[];

  constructor(private citationsService: CitationsService) {
    this.loadCitations();
  }

  loadCitations() {
    this.citationsService.getAll().subscribe(citations => {
      this.citations = citations;
    })
  }

  deleteCitation(id: number) {
    this.citationsService.delete(id).subscribe(_ => {
      this.loadCitations();
    })
  }

  submit(form: NgForm) {
    this.citationsService.create({
      citation: form.value.citation
    }).subscribe(_ => {
      this.loadCitations();
    })
  }
}
