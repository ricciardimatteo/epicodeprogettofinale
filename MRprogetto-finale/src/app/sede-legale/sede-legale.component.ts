import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnagraficaService } from '../services/anagrafica.service';

@Component({
  selector: 'app-sede-legale',
  templateUrl: './sede-legale.component.html',
  styleUrls: ['./sede-legale.component.css']
})
export class SedeLegaleComponent implements OnInit {
  legale: any;
  

  ngOnInit(): void {
    this.router.params.subscribe(params => 
      this.anagraficaservice.getClienteid(params.id)
        .subscribe(response => this.legale = response))
  }
  constructor( private anagraficaservice:AnagraficaService,private router: ActivatedRoute) { }
}
