import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Modelo/Persona';

@Injectable()
export class ServiceService {

  
  constructor(private http:HttpClient) { }

  Url='http://192.168.3.40:8080/usuario';

  getPersonas(){
    return this.http.get<Persona[]>(this.Url);
  }
  createPersona(persona:Persona){
    return this.http.post<Persona>(this.Url,persona);
  }
  getPersonaId(id:number){
    return this.http.get<Persona>(this.Url+"/"+id);
  }
  updatePersona(persona:Persona){
    return this.http.put<Persona>(this.Url+"/"+persona.id,persona);
  }
  deletePersona(persona:Persona){
    return this.http.delete<Persona>(this.Url+"/"+persona.id);
  }
}
