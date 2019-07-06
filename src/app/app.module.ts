import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//import { AppRoutingModule } from './app-routing.module';
import { AppRoutingModule } from './shared/routing/app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { SearchPipe } from './shared/pipes/search.pipe'; 
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {NgxPaginationModule} from 'ngx-pagination'; 




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    SearchPipe,
    DetailsComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    NgxPaginationModule,
    FormsModule,
  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
