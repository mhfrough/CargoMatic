import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "./providers/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public alert: boolean = false
  
  constructor(public _auth: AuthService, private router: Router) { 
    router.navigate([''])
  }
  
}
