import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-login-modal',
  imports: [],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.css'
})
export class LoginModalComponent {
  @Input() login ?:string
  @Output() sortie = new EventEmitter<string>();

  fermer() {
    this.sortie.emit("Données venant du composant enfant login ");
  }
}
