import { Component } from '@angular/core';
import { Credentials } from './login-form.component';

@Component({
  selector: 'my-app',
  template: `
    <div style="background-color: lightblue">
      <div style="padding: 3rem;">
        <login-form (credentials)="logCredentials($event)"></login-form>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logCredentials(credentials: Credentials) {
    console.log(credentials);
  }
}
