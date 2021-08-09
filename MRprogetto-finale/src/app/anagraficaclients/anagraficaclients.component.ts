import { Component, OnInit } from '@angular/core';
import { AnagraficaService } from '../services/anagrafica.service';

@Component({
  selector: 'app-anagraficaclients',
  templateUrl: './anagraficaclients.component.html',
  styleUrls: ['./anagraficaclients.component.css']
})
export class AnagraficaclientsComponent implements OnInit {
clienti:any
  constructor(private anagraficaservice:AnagraficaService) { }

  ngOnInit(): void {
  this.anagraficaservice.getAllClientipag(0).subscribe(response => this.clienti = response);
  }

  getPaginations(pagination:number): void {
  this.anagraficaservice.getAllClientipag(pagination).subscribe(data => this.clienti =data);
}
}
