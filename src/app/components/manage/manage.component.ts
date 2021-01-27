import { Component, OnDestroy } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../pokemon';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PhaseserviceService } from '../../services/phaseservice.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnDestroy {
  pokemon$:Subscription = new Subscription();
  subscripts : Array<Subscription> = [];
  disactiveButtons : boolean = false; 


  pokemons:Pokemon[] = [];
  constructor(
    private phaseService:PhaseserviceService,
    private pokeService:PokemonService,
    private _snackBar: MatSnackBar,
    private _router:Router
  ) {
    this.subscripts.push(
      this.pokemon$ = this.pokeService.getPokemonNames().subscribe((pokeList:any)=>{
        for(let pokemon of pokeList.results){
          this.pokeService.getPokemonInformation(pokemon.url).subscribe((inf:any)=>{
            this.pokemons.push({
              id:inf.id,
              name:inf.name,
              height:inf.height,
              base_experience:inf.base_experience,
              image:inf.sprites.back_default
            })

          })   
        }
       
      }));
    
   }
 
  ngOnDestroy(): void {
    console.log('destroyed!!!');
    this.subscripts.forEach(
      (x) => {x.unsubscribe()}
    )
  }
  votation(pokemon:Pokemon){
    this._snackBar.open(`You vote for ${pokemon.name} !!!`, 'Close', {
      duration: 3500,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
    
    this.phaseService.ifvoted = true;
    this.disactiveButtons = !this.disactiveButtons;
    this.pokeService.setPokemon(pokemon);
    this.phaseService.plusVote(pokemon.name);
    this._router.navigate(['/vote']);
    
  }

}
