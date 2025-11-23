import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginModalComponent } from '../login-modal/login-modal.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink, LoginModalComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  username = "bryan"
  recuperer($event:string){
    console.log("Données recus du composant enfant header: "+$event);
  }
}
