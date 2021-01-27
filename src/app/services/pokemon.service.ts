import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../pokemon';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';
  private pokemon:Pokemon = new Pokemon();
  constructor(private _http:HttpClient) { }
  getPokemonNames(){
    return this._http.get(`${this.BASE_URL}`);
  }
  getPokemonInformation(url:string){
    return this._http.get(url)
  }
  setPokemon(pokemon:Pokemon){
    this.pokemon = pokemon
  }
  getPokemonVoted(){
    return this.pokemon
  }
  removePokemonSelected(){
    this.pokemon = new Pokemon();
  }
}
