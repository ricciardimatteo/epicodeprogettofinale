import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-fatture',
  templateUrl: './fatture.component.html',
  styleUrls: ['./fatture.component.css']
})
export class FattureComponent implements OnInit {
  invoice:any


  constructor(
    private fattureservice:FattureService, private router:Router
   
    ) { }

  ngOnInit(): void {
  this.fattureservice.getfatturainsoluta()
  .subscribe (response =>this.invoice= response );
  }

  getsingleinvoice(item:any):void {
    this.router.navigate(['platformazienda/fattureinsolute',item.id,'editinvoice'])
  }


}