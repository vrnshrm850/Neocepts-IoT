import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
 templateUrl: './app.component.html',
 providers: [MatIconRegistry]
})

export class AppComponent implements OnInit {
  pageTitle: string = 'Neocepts IoT';
  isLoggedIn$: Observable<boolean>; 
  
  constructor(private _iconRegistry: MatIconRegistry,private _domSanitizer: DomSanitizer, private authService:AuthService){
    this._iconRegistry.addSvgIconInNamespace('assets', 'user',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/user.svg'));
  }

  ngOnInit(){
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  isUserLoggedIn(){
   return  localStorage.getItem('isLoggedIn');
  }
}
