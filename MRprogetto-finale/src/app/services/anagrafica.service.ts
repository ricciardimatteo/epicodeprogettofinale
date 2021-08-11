import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AnagraficaService {
  headers = new HttpHeaders();
  beaererAuth = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYyODIzMTk0OSwiZXhwIjoxNjI5MDk1OTQ5fQ.r4m4NpwsPecj25MxZgsfvkB4J4urueCAhrtwljupYKjqDfOHhtprAv9qTerRDCwtTrGcHj_auEqf-pBGj4SWxQ'
  
  constructor(private http: HttpClient) {
    this.headers = this.headers.set("Authorization", 'Bearer ' + this.beaererAuth).set("X-TENANT-ID", 'fe_0321');
  }


getclienti(){
  return this.http.get<any>(environment.urlAPI + '/api/clienti?size=800&sort=id,ASC',{headers: this.headers})
}

getClienteid(id: number) {
  return this.http.get<any>(environment.urlAPI + '/api/clienti/'+id, {headers: this.headers});

}

deleteCliente(id:number) {
  return this.http.delete<any>(environment.urlAPI + '/api/clienti/'+id, {headers: this.headers});
}

addCliente (client:any) {
  return this.http.post<any>(environment.urlAPI + '/api/clienti/',client, {headers: this.headers});
}

modificaClienti (client:any) { 
  return this.http.put<any>(environment.urlAPI + '/api/clienti/'+client.id,client, {headers: this.headers});
}

getComuni () {
return this.http.get<any>(environment.urlAPI + '/api/comuni?page=0&size=20&sort=id,ASC', {headers: this.headers});
}

getTipoCliente () {
  return this.http.get<any>(environment.urlAPI + '/api/clienti/tipicliente', {headers: this.headers});
  }
  
getProvince () {
  return this.http.get<any>(environment.urlAPI + '/api/province?page=0&size=20&sort=id,ASC', {headers: this.headers});
    }

getfatturabyid(id:number){
  return this.http.get<any>(environment.urlAPI + '/api/fatture/cliente/'+id, {headers: this.headers});
}
}

