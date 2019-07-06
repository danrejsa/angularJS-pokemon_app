import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms'
import { pokemonClass } from '../shared/AbstractClass/pokemonClass';

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
