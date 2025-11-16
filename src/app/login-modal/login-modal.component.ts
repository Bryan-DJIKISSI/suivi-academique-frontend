import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login-modal',
  imports: [],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.css'
})
export class LoginModalComponent {
  @Input() login ?:string
}
