import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from 'src/shared/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from 'src/app/owner/home/home.component';


const routes: Routes = [
  { path: 'register', component: RegisterComponent,  canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
