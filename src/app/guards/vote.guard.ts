import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PhaseserviceService } from '../services/phaseservice.service';

@Injectable({
  providedIn: 'root'
})
export class VoteGuard implements CanActivate {
  constructor(
    private _snackBar: MatSnackBar, 
    private _router : Router,
    private _phaseService:PhaseserviceService
    ){ }

  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let canEnter:boolean = true;
      if(this._phaseService.ifvoted==false){
        this._snackBar.open('You cannot enter, You do not voted for a poke', 'Close', {
          duration: 3500,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
        this._router.navigate(['/manage']);
        canEnter =  false;
        
      }
    
      return canEnter;
  }
  
}
