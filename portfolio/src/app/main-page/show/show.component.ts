import { Component } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent {
  projet = [
    {
      id: 1,
      pict: "/assets/pict/projets/starfieldLogo.png",
    },
    {
      id: 2,
      pict: "/assets/pict/projets/wellifeLogo.png",
    },
    {
      id: 3,
      pict: "/src/assets/pict/projets/EaglePCLogo.png"
    }
  ]
}
