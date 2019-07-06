import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  myIndex : number = 0;  
  constructor() { }

  ngOnInit() {
   this.carousel()
  }
  
  carousel() {  
  const x = document.getElementsByClassName("slide-img") as HTMLCollectionOf<HTMLElement>;   
  for (let i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
  }
    this.myIndex++;
    if (this.myIndex > x.length) {this.myIndex = 1}    
    x[this.myIndex-1].style.display = "block";  
    setTimeout(this.carousel, 1000000000); 
  }


}
