import { Component } from '@angular/core';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css'],
})
export class ProjetsComponent {
  projets = [
    {
      id: 1,
      pict: '/assets/pict/projets/starfieldLogo.png',
    },
    {
      id: 2,
      pict: '/assets/pict/projets/bethesdaLogo.png',
    },
    {
      id: 3,
      pict: '/assets/pict/projets/animusLogo.png',
    },
  ];
}
