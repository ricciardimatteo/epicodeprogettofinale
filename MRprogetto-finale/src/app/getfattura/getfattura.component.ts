import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnagraficaService } from '../services/anagrafica.service';

@Component({
  selector: 'app-getfattura',
  templateUrl: './getfattura.component.html',
  styleUrls: ['./getfattura.component.css']
})
export class GetfatturaComponent implements OnInit {
  fattura: any;
  

  ngOnInit(): void {
    this.router.params.subscribe(params => 
      this.anagraficaservice.getfatturabyid(params.id)
        .subscribe(response => this.fattura = response))
  }
  constructor( private anagraficaservice:AnagraficaService,private router: ActivatedRoute) { }
}
