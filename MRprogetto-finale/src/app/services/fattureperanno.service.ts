import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FattureperannoService {
  headers = new HttpHeaders();
  beaererAuth = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYyODIzMTk0OSwiZXhwIjoxNjI5MDk1OTQ5fQ.r4m4NpwsPecj25MxZgsfvkB4J4urueCAhrtwljupYKjqDfOHhtprAv9qTerRDCwtTrGcHj_auEqf-pBGj4SWxQ'
  
  constructor(private http: HttpClient) {
    this.headers = this.headers.set("Authorization", 'Bearer ' + this.beaererAuth).set("X-TENANT-ID", 'fe_0321');
  
}

getb(){
  return this.http.get<any>(environment.urlAPI + '/api/fatture/data/?from=01.01.2019&to=31.12.2019'), {headers: this.headers}

}

getfatturec(){
  return this.http.get<any>(environment.urlAPI + '/api/fatture/anno/?anno=2019'), {headers: this.headers}
}

getfattured(){
  return this.http.get<any>(environment.urlAPI + '/api/fatture/anno/?anno=2020'), {headers: this.headers}
}

getfatturef(){
  return this.http.get<any>(environment.urlAPI + '/api/fatture/anno/?anno=2021'), {headers: this.headers}
}

}

