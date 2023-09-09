import { Component } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent {
  projets = [
    {
      id: 1,
      pict: "/assets/pict/projets/starfieldLogo.png",
    },
    {
      id: 2,
      pict: "/assets/pict/projets/bethesdaLogo.png",
    },
    {
      id: 3,
      pict: "/assets/pict/projets/animusLogo.png"
    }
  ]
}
