import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

export class PokemonId {
  name: string;
  id: number;
  sprites: Sprites;
  weight: number;
  height: number;
  stats: string;
  types: string;
  abilities: string;
  moves: string;
  base_experience: number;
  effort:string;
  stat: string;
  type: string;
  base_stat: String;
  ability: string;
  move: string

  constructor(
    name: string,
    id: number,
    sprites: Sprites,
    weight: number,
    height: number,
    stats: string,
    types: string,
    abilities: string,
    moves: string,
    base_experience: number,
    effort:string,
    stat: string,
    type: string,
    base_stat: String,
    ability: string,
    move: string
  ) {
    this.name = name;
    this.id = id;
    this.sprites = sprites;
    this.weight = weight;
    this.height = height;
    this.stats = stats;
    this.types = types;
    this.abilities = abilities;
    this.moves = moves;
    this.base_experience = base_experience;
    this.effort= effort;
    this.stat= stat;
    this.type= type;
    this.base_stat= base_stat;
    this.ability= ability;
    this.move= move

  }
}

export class Sprites {
  front_default: string;
  constructor(front_default: string) {
    this.front_default = front_default;
  }
}
