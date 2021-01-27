import { Component, OnInit } from '@angular/core';
//import { Pokemon } from '../../pokemon';
import { PhaseserviceService } from '../../services/phaseservice.service';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  listPoke: any[] = [];
  listCalif:any[] = [];
  listRanking:any[] = [];
  constructor(private phaseService:PhaseserviceService) { }

  ngOnInit(): void {
    this.listPoke = this.phaseService.getListPokemon()
    this.listCalif = this.phaseService.getListQuantities()
    for(let poke in this.listPoke){
      let objecto = {
        "name":this.listPoke[poke],
        "cantidad":this.listCalif[poke]
      }
      this.listRanking.push(objecto)
    }
   
    
  }
}
