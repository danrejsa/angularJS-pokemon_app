import { Component, OnInit } from '@angular/core';
import { pokemonClass } from '../logic/myClass/pokemonClass';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent extends pokemonClass implements OnInit {
weight: number;
height: number;
stats: string;
types: string;
abilities: string;
moves:string;
base_experience:number;
effort:string;
stat: string;
type: string;
base_stat: String;
ability: string;
move: string


ngOnInit() {
  this.getPokemonId()
  
}
}
