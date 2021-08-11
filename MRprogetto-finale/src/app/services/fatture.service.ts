import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FattureService {
  headers = new HttpHeaders();
  beaererAuth = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYyODIzMTk0OSwiZXhwIjoxNjI5MDk1OTQ5fQ.r4m4NpwsPecj25MxZgsfvkB4J4urueCAhrtwljupYKjqDfOHhtprAv9qTerRDCwtTrGcHj_auEqf-pBGj4SWxQ'
  
  constructor(private http: HttpClient) {
    this.headers = this.headers.set("Authorization", 'Bearer ' + this.beaererAuth).set("X-TENANT-ID", 'fe_0321');
  }

  getfatturabyid(id:number){
    return this.http.get<any>(environment.urlAPI + '/api/fatture/cliente/'+id, {headers: this.headers})
  }

  getfatturainsoluta(){
    return this.http.get<any>(environment.urlAPI + '/api/fatture/stato/2?size=5000', {headers: this.headers})
  }

}