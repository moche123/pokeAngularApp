import { Injectable } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';


@Injectable({
  providedIn: 'root'
})
export class PhaseserviceService {
  listPokemons:any[] = []; 
  listQuantities:any[] = []; 
  constructor(private _pokeService:PokemonService) {
    this._pokeService.getPokemonNames().subscribe((pokeList:any)=>{
      for(let pokemon of pokeList.results){
        this.listPokemons.push(pokemon.name)
        this.listQuantities.push(0)
      }
    })
  }
  public ifvoted:boolean = false;
  public disactiveButtons:boolean = false;
  plusVote(name:string){
    for(let nameI in this.listPokemons){
      if(this.listPokemons[nameI] == name){
        this.listQuantities[nameI]++;
      }
    }
  }
  getListPokemon(){
    return this.listPokemons;
  }
  getListQuantities(){
    return this.listQuantities;
  }
}