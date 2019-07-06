import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './logic/routing/app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { FilterPipe } from './logic/pipes/search.pipe'; 
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NgxPaginationModule } from 'ngx-pagination'; 
import { DeferLoadModule } from '@trademe/ng-defer-load';
import { SlideshowModule } from 'ng-simple-slideshow';
import { SliderModule } from 'angular-image-slider';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { ReactiveFormsModule } from '@angular/forms'




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FilterPipe,
    DetailsComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    SlideshowComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    DeferLoadModule,
    SlideshowModule,
    SliderModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
