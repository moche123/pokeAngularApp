import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/pokemon';
import { Router} from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PhaseserviceService } from 'src/app/services/phaseservice.service';
@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  selectedPokemon:Pokemon = new Pokemon()
  constructor(
    private _pokeService:PokemonService,
    private _router : Router,
    private _phaseService:PhaseserviceService
    ) { }
 
  ngOnInit(): void {
    this.selectedPokemon = this._pokeService.getPokemonVoted();
    
  }
  changeVote(){
    this._pokeService.removePokemonSelected();
    this._phaseService.ifvoted = false;
    this._phaseService.disactiveButtons = false;

    this._router.navigate(['/manage']);

  }
  

}
