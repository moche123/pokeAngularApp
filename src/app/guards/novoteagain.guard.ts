import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CanActivate, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { PhaseserviceService } from '../services/phaseservice.service';

@Injectable({
  providedIn: 'root'
})
export class NovoteagainGuard implements CanActivate, CanDeactivate<unknown> {
  constructor(
    private _snackBar: MatSnackBar, 
    
    private _phaseService:PhaseserviceService
    ){ }
   
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let canEnter:boolean = true;
    if(this._phaseService.ifvoted==true){
      this._snackBar.open('You cannot enter, You have already voted for one Pokemon', 'Close', {
        duration: 3500,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      canEnter =  false;
     
    }
  
    return canEnter;
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let canGoOut = true;
      if(this._phaseService.ifvoted==false){
        this._snackBar.open('You cannot go, You have not voted for a pokemon', 'Close', {
          duration: 3500,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
        
        canGoOut =  false;
      
      }
      console.log(canGoOut);
      return canGoOut;
    
      
  }
  
}
