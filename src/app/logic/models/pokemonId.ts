import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

export class PokemonId {
  name: string;
  id: number;
  sprites: Sprites;
  weight: number;
  height: number;
  stats: Stats;
  types: Types;
  abilities: Abilities;
  moves: Moves;
  base_experience: number;
  

  constructor(
    name: string,
    id: number,
    sprites: Sprites,
    stats: Stats,
    types: Types,
    abilities: Abilities,
    moves: Moves,
    weight: number,
    height: number,    
    base_experience: number
    
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
    

  }
}

export class Sprites {
  front_default: string;
  constructor(front_default: string) {
    this.front_default = front_default;
  }
}
export class Stats {
    effort: string;
    stat: string;
    base_stat: string;

    constructor(effort: string, stat: string, base_stat: string ) {
      this.effort = effort;
      this.stat = stat;
      this.base_stat = base_stat;
    }
  }
  export class Types {
    type: string;
    constructor(type: string) {
      this.type = type;
    }
  }
  export class Abilities {
    ability: string;
    constructor(ability: string) {
      this.ability = ability;
    }
  }

  export class Moves {
    move: string;
    constructor(move: string) {
      this.move = move;
    }
  }