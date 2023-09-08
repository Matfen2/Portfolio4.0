import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-projet',
  templateUrl: './show-projet.component.html',
  styleUrls: ['./show-projet.component.css']
})
export class ShowProjetComponent implements OnInit  {
  projetId!: number;
  projetData: any;

  projetDetails = [
    {
      id: 1,
      mainPict: '',
      langageOne: 'ANGULAR',
      langageTwo: 'TYPESCRIPT',
      langageThree: 'SCSS',
      objectifOfSite: '',
      hrefGithub: '',
      hrefSite: '',
    },
    {
      id: 2,
      mainPict: '',
      langageOne: 'ANGULAR',
      langageTwo: 'TYPESCRIPT',
      langageThree: 'SCSS',
      objectifOfSite: '',
      hrefGithub: '',
      hrefSite: '',
    },
    {
      id: 3,
      mainPict: '',
      langageOne: 'ANGULAR',
      langageTwo: 'TYPESCRIPT',
      langageThree: 'SCSS',
      objectifOfSite: '',
      hrefGithub: '',
      hrefSite: '',
    }
  ]

  constructor (private routes: ActivatedRoute) {}

  ngOnInit(): void {
    this.routes.params.subscribe((params) => {
      this.projetId =+ params['id'];
      this.projetData = this.projetDetails.find((projet) => projet.id === this.projetId);
    })
  }
}
