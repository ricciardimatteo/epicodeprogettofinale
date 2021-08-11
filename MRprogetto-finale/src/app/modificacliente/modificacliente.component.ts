import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnagraficaService } from '../services/anagrafica.service';

@Component({
  selector: 'app-modificacliente',
  templateUrl: './modificacliente.component.html',
  styleUrls: ['./modificacliente.component.css']
})
export class ModificaclienteComponent implements OnInit {
  comune: any = {
    nome: "",
  }
  tipocliente: any 
  
  province: any = {
    nome: "",
    sigla: "",
  }
  obj: any
  newClient: any = {
    ragioneSociale: '', 
    partitaIva: '',
     tipoCliente: '', 
     email: '', 
     pec: '', 
     telefono: '', 
     nomeContatto: '', 
     cognomeContatto: '',
      telefonoContatto: '', 
      emailContatto: '',
    indirizzoSedeOperativa: {
      via: '', 
      civico: '',
       cap: '', 
       localita: '',
      comune: {
        id:1, 
        nome: '',
        provincia:  { id:1, nome: '', sigla: '' }
      }
    },
    indirizzoSedeLegale: {
       via: '', 
       civico: '', 
       cap: '', 
       localita: '',
      comune: { 
        id: 1, 
        nome: '', 
        provincia: { id: 1, nome: '', sigla: '' } }
    },
  }



  constructor(private router: ActivatedRoute, private anagraficaservice:AnagraficaService, private route:Router) { }

  ngOnInit(): void {
    this.anagraficaservice.getTipoCliente().subscribe(response=>this.tipocliente=response),
    this.anagraficaservice.getComuni().subscribe(data=> this.comune= data),
    this.anagraficaservice.getProvince().subscribe(resp=> this.province=resp)
    this.router.params.subscribe(params => 
      this.anagraficaservice.getClienteid(params.id)
        .subscribe(response => this.newClient = response))
  }

  modificauser(){
    alert('Utente Modificato!!..Al redirect aggiorna la pagina')
    console.log(this.newClient)
  this.anagraficaservice.modificaClienti(this.newClient).subscribe(response => console.log(response));
  this.route.navigate(['platformazienda']) 
  }

}
