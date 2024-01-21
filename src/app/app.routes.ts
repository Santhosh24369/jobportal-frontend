import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { JobsComponent } from './Components/jobs/jobs.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';


export const routes: Routes = [
  {'path':'',component:HomeComponent},
  {'path':'Login',component:LoginComponent},
  {'path':'Signup',component:SignupComponent},
  {'path':'about',component:AboutComponent},
  {'path':'jobs',component:JobsComponent},
  {'path':'organization_approval',component:DashboardComponent}
];
