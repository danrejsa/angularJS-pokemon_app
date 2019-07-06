import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Pokemon } from '../models/pokemon';
import { PokemonId } from '../models/pokemonId';



@Injectable({
  providedIn: 'root'
})
export class PokemonService {  
  pokeApi: any;
  constructor(private http: HttpClient) {  
    this.pokeApi = 'https://pokeapi.co/api/v2/pokemon/?limit=800'
  }
  
getPokemon(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${this.pokeApi}`)
    .pipe(
     catchError(this.handleError)
    );
  }

  getPokemonId(id): Observable<PokemonId> {
   return this.http.get<PokemonId>(`https://pokeapi.co/api/v2/pokemon/${id}`)
   .pipe(
     catchError(this.handleError)
   );
  }

  private handleError(error: HttpErrorResponse) {
   if (error.error instanceof ErrorEvent) {
     console.error('An error occurred:', error.error.message);
   } else {
     console.error(
       `Backend returned code ${error.status}, ` +
       `body was: ${error.error}`);
   }
   return throwError(
     'Something bad happened; please try again later.');
 }
}


