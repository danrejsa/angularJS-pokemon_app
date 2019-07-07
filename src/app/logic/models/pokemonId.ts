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
