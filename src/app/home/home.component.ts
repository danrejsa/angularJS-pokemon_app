import { Component, OnInit } from '@angular/core';
import { pokemonClass } from '../shared/AbstractClass/pokemonClass';
import { Pokemon } from '../shared/models/pokemon';
import { PokemonId } from '../shared/models/pokemonId';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends pokemonClass implements OnInit {
  query: string;
    
  ngOnInit() {
    this.getPokemons()
  }
}

