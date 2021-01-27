import { Component, OnInit,Input,EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  constructor() { }
  ngOnInit(): void {
   console.log(this.disactive)
  }

  @Input() pokemon:any
  @Output() vote:EventEmitter<any> = new EventEmitter();
  @Input() disactive:boolean = true;
  votation(pokemon:any){
    this.vote.emit(pokemon);
  }

}
