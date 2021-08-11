import { Component, OnInit } from '@angular/core';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-fatture',
  templateUrl: './fatture.component.html',
  styleUrls: ['./fatture.component.css']
})
export class FattureComponent implements OnInit {
  invoice:any


  constructor(
    private fattureservice:FattureService,
   
    ) { }

  ngOnInit(): void {
  this.fattureservice.getfatturainsoluta()
  .subscribe (response =>this.invoice= response );
  }
}