import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

export type Credentials = { password: string; username: string };

@Component({
  selector: 'login-form',
  template: `
    <mat-card>
      <mat-card-title><h1>Login Page</h1></mat-card-title>
      <mat-card-content>
        <form [formGroup]="form" (ngSubmit)="submit()">
          <mat-form-field>
            <mat-label>Username</mat-label>
            <input
              type="text"
              matInput
              placeholder="Enter Username"
              formControlName="username"
            />
          </mat-form-field>

          <mat-form-field>
            <mat-label>Password</mat-label>
            <input
              type="password"
              matInput
              placeholder="Enter Password"
              formControlName="password"
            />
          </mat-form-field>

          <div class="button">
            <button mat-stroked-button type="submit" color="primary">
              Login
            </button>
          </div>
        </form>
      </mat-card-content>
    </mat-card>
  `,
  styles: [
    `
      :host,
      mat-card-title {
        display: flex;
        justify-content: center;
      }

      .mat-form-field {
        width: 100%;
        min-width: 250px;
      }

      .button {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
      }
    `
  ]
})
export class LoginComponent implements OnInit {
  @Output() credentials = new EventEmitter<Credentials>();
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor() {}
  ngOnInit() {}
  submit() {
    this.credentials.emit(this.form.value);
  }
}
