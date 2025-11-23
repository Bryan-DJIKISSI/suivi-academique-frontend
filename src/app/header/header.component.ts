import { AuthService } from '../services/auth.service';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone:true,
  imports: [RouterLink, LoginModalComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  username = "bryan"
  recuperer($event:string){
    console.log("Données recus du composant enfant header: "+$event);
  }

  user$;

  constructor(private authService: AuthService) {
    this.user$ = this.authService.user$
  }

  deconnecter(): void {
    this.authService.logout();
  }
}
