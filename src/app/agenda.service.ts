import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { agenda } from '../agenda';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  // url='http://localhost:8080/agenda';
  // url='http://52.70.141.1:8080/agenda';
   url='https://api.fatecagenda.duckdns.org/agenda'

  constructor(private http:HttpClient) { }

  getagenda(): Observable<agenda[]>{
    return this.http.get<agenda[]>(this.url);
  }

  getagendaById(id:number): Observable<agenda>{
    return this.http.get<agenda>(`${this.url}/${id}`);
  }

  delete(agenda: agenda):Observable<void>{
    return this.http.delete<void>(`${this.url}/${agenda.id}`)
  }

  update(agenda: agenda):Observable<agenda>{
    return this.http.put<agenda>(`${this.url}/${agenda.id}`,agenda);
  };

  save(agenda: agenda):Observable<agenda>{
    return this.http.post<agenda>(this.url, agenda);
  };
}
