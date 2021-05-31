import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { LoginComponent } from './login-form.component';

@NgModule({
  imports: [ 
    BrowserAnimationsModule, 
    ReactiveFormsModule, 
    BrowserModule, 
    FormsModule, 
    MaterialModule ],
  declarations: [ AppComponent, LoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}