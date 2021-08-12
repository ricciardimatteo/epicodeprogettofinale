import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-edit-fatture',
  templateUrl: './edit-fatture.component.html',
  styleUrls: ['./edit-fatture.component.css']
})
export class EditFattureComponent implements OnInit {
  stato:any
  newClient:any={
    id:1,
    data:"",
    numero:1,
    anno:1,
    importo:1,
    stato:{
    id: 1,
    nome: ""
}
,cliente:{"":1}}


  constructor(private router: ActivatedRoute, private fattureservice:FattureService, private route:Router) { }

  ngOnInit(): void {
    this.fattureservice.getfatturastato().subscribe(data => this.stato=data)
    this.router.params.subscribe(params => 
      this.fattureservice.getsingolafatturabyid(params.id)
        .subscribe(response => this.newClient = response))
  }

  modificafattura(): void {
    alert('Stato Fattura Modificato')
    console.log(this.newClient)
  this.fattureservice.UpdateInvoice(this.newClient).subscribe(response => console.log(response));
  this.route.navigate(['platformazienda/archiviofatture']) 
  }

}
