import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent {
  projets = [
    {
      id: 1,
      pict: "/assets/pict/projets/healGamerLogo.png",
    },
    {
      id: 2,
      pict: "/assets/pict/projets/backWorldLogo.png",
    },
    {
      id: 3,
      pict: "/assets/pict/projets/animusLogo.png"
    }
  ]

  person = {
    pseudo: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  }

  showContact(test: NgForm) {
    console.log(test.value);
    
  }
}
