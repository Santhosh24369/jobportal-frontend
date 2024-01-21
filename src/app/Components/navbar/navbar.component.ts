import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome,faBriefcase,faSignInAlt,faHamburger,faUser,faUserCircle,faEnvelope,faEnvelopeOpen,faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { LoginComponent } from '../login/login.component';
import { AuthService } from '../../auth.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,FontAwesomeModule,LoginComponent,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
faHome = faHome;
faBriefcase = faBriefcase;
faSignInAlt=faSignInAlt;
faHamburger=faHamburger;fauser = faUser;faUserCircle = faUserCircle;faEnvelope=faEnvelope;faEnvelopeOpen = faEnvelopeOpen;faSignOutAlt = faSignOutAlt;
user : any='' ;


constructor(private authServices: AuthService){
  this.authServices.currentmessage.subscribe((use)=>{
    this.user = use;
  })
}


}
