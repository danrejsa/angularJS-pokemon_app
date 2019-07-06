import { Component, OnInit } from '@angular/core';
import { pokemonClass } from '../logic/myClass/pokemonClass';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent extends pokemonClass implements OnInit {
query: string;
  
ngOnInit() {   
this.getPokemons();
    }
}

