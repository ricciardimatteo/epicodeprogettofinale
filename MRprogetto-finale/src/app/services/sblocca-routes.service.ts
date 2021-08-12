import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SbloccaRoutesService {
private login = false;
  constructor() { }
  
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
      return this.login;
    }

    loginTrue(resp:any){
      if(resp != null){
        this.login = true;
      } else {
        alert ('username e/o password incorrect')
      }
    }
  }

