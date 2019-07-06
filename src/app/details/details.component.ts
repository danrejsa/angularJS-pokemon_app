import { Component, OnInit } from '@angular/core';
import { pokemonClass } from '../logic/myClass/pokemonClass';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent extends pokemonClass implements OnInit {

ngOnInit() {
  this.getPokemonId()
  
}
}
