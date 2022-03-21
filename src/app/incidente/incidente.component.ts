import { Component, OnInit } from '@angular/core';
import { CalendarioIncidente } from '../Entity/calendarioIncidente';
import { IncidenteService } from './incidente.service';

@Component({
  selector: 'app-incidente',
  templateUrl: './incidente.component.html',
  styleUrls: ['./incidente.component.css']
})
export class IncidenteComponent implements OnInit {

  calendarioIncidente : CalendarioIncidente[];

  constructor(private service: IncidenteService) { }

  ngOnInit(): void {
    this.service.getList().subscribe(data =>{
      this.calendarioIncidente = data;
    });
  }

}