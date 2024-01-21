import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope,faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FontAwesomeModule,RouterLink,ReactiveFormsModule,JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  faEnvelope = faEnvelope;
  faSignInAlt = faSignInAlt;

  form: FormGroup = this.fb.group({
    email: ['',Validators.required],
    password: ['',Validators.required],
  });

  constructor(private title: Title,private authServices: AuthService,private fb:FormBuilder){}
ngOnInit(): void {
    this.title.setTitle('Search 4 Smart | Sign In')
}
  login(){
    this.authServices.Login(this.form.value);
  }

}
