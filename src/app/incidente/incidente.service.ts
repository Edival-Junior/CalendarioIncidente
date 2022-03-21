import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CalendarioIncidente } from '../Entity/calendarioIncidente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncidenteService {
  private calendarUrl: string;

  constructor(private http: HttpClient) {
    this.calendarUrl = 'http://localhost:8080/im-day';
  }

  public getList(): Observable<CalendarioIncidente[]> {
    return this.http.get<CalendarioIncidente[]>(this.calendarUrl);
  }

}
