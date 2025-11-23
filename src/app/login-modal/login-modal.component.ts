import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-modal',
  standalone:true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.css'
})
export class LoginModalComponent {
 // @Input() login ?:string
 // @Output() sortie = new EventEmitter<string>();

  /*fermer() {
    this.sortie.emit("Données venant du composant enfant login ");
  }*/

  login: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  seConnecter(): void {

    console.log('Login:', this.login);
    console.log('Password:', this.password);
    if(this.authService.login(this.login, this.password)) {
      // fermeture de la modal

      const modalElement = document.getElementById('loginModal');
      if (modalElement) {
        const modal = (window as any).bootstrap.Modal.getInstance(modalElement);
        modal?.hide();
      }

      this.login = '';
      this.password = '';

      alert('connexion réussie !');
    } else {
      alert('Veuillez remplir tous les champs !');
    }
  }
}

