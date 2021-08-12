import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SbloccaRoutesService } from '../services/sblocca-routes.service';
import { SignupLoginService } from '../services/signup-login.service';

@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrls: ['./home-login.component.css']
})
export class HomeLoginComponent implements OnInit {
loginMember:any={
username:'',
password:''
}
objectlogin:any;
  constructor(private sbloccarotte:SbloccaRoutesService, private router:Router, private loginService:SignupLoginService) { }

  ngOnInit(): void {
  }

vai(): void {
this.loginService.addLogin(this.loginMember).subscribe(response=>{ console.log(response)
this.sbloccarotte.loginTrue(response)
this.router.navigate(['platformazienda']) 
 }) 

}
}


