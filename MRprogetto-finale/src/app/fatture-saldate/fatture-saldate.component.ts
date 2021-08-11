import { Component, OnInit } from '@angular/core';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-fatture-saldate',
  templateUrl: './fatture-saldate.component.html',
  styleUrls: ['./fatture-saldate.component.css']
})
export class FattureSaldateComponent implements OnInit {
  invoice:any


  constructor(
    private fattureservice:FattureService,
   
    ) { }

  ngOnInit(): void {
  this.fattureservice.getfatturasaldata()
  .subscribe (response =>this.invoice= response);
  }
}
  