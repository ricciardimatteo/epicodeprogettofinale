import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupLoginService } from '../services/signup-login.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  newUser :any ={
    id: "", 
    username :'',
    email:'',
    password:'',
    roles:['ROLE_USER'],
  }


  constructor(private router: Router, private signupservice: SignupLoginService) { }

  ngOnInit(): void {

  }

  addnewuser(){
    console.log(this.newUser)
  alert('Nuovo User Aggiunto')
  this.signupservice.addSignup(this.newUser).subscribe(resp=> console.log(resp));
  this.router.navigate(['platformazienda/index'])
  }

}
