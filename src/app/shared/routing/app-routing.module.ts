import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../../home/home.component'; 
import { DetailsComponent } from '../../details/details.component';
import { AboutComponent } from '../../about/about.component';
import { ContactComponent } from '../../contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'detail/:id', component: DetailsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
