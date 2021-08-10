import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnagraficaService } from '../services/anagrafica.service';

@Component({
  selector: 'app-dati-referente',
  templateUrl: './dati-referente.component.html',
  styleUrls: ['./dati-referente.component.css']
})
export class DatiReferenteComponent implements OnInit {
  referente: any;
  

  ngOnInit(): void {
    this.router.params.subscribe(params => 
      this.anagraficaservice.getClienteid(params.id)
        .subscribe(response => this.referente = response))
  }
  constructor( private anagraficaservice:AnagraficaService,private router: ActivatedRoute) { }
}

