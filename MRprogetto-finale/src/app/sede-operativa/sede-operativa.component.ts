import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnagraficaService } from '../services/anagrafica.service';

@Component({
  selector: 'app-sede-operativa',
  templateUrl: './sede-operativa.component.html',
  styleUrls: ['./sede-operativa.component.css']
})
export class SedeOperativaComponent implements OnInit {
   utenti: any;
  

  ngOnInit(): void {
    this.router.params.subscribe(params => 
      this.anagraficaservice.getClienteid(params.id)
        .subscribe(response => this.utenti = response))
  }
  constructor( private anagraficaservice:AnagraficaService,private router: ActivatedRoute) { }
}
