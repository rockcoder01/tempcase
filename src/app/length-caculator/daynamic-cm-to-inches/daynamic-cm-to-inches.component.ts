import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-daynamic-cm-to-inches',
  templateUrl: './daynamic-cm-to-inches.component.html',
  styleUrls: ['./daynamic-cm-to-inches.component.scss']
})
export class DaynamicCmToInchesComponent implements OnInit {

  mm: any;
  cm: any;
  inches: any;
  meter: any;
  feet: any;

  constructor(private route:ActivatedRoute) { 
    this.route.data.subscribe(data => this.cm = data['cmValue']);
    this.cmChanges()
  }

  ngOnInit(): void {
  }

  mmChanges() {
    this.cm = (this.mm / 10).toFixed(2);
    this.meter = (this.mm / 1000).toFixed(2);
    this.inches = (this.mm * 0.039370).toFixed(2);
    this.feet = (this.mm * 0.00328084).toFixed(2);

  }
  cmChanges() {
    this.mm = (this.cm * 10).toFixed(4);
    this.meter = (this.cm / 100).toFixed(4);
    this.inches = (this.cm * 0.39370).toFixed(4);
    this.feet = (this.cm * 0.0328084).toFixed(4);
  }

  inchesChanges() {
    this.mm = (this.inches / 0.03937008).toFixed(2);
    this.cm = (this.inches / 0.3937008).toFixed(2);
    this.meter = (this.inches / 39.37008).toFixed(2);
    this.feet = (this.inches * 0.08333).toFixed(2);
  }
  meterChanges() {
    this.mm = (this.meter / 0.001).toFixed(2);
    this.cm = (this.meter / 0.01).toFixed(2);
    this.inches = (this.meter * 39.37008).toFixed(2);
    this.feet = (this.meter * 3.28084).toFixed(10);
  }
  feetChanges() {
    this.mm = (this.feet * 304.8).toFixed(2);
    this.cm = (this.feet * 30.48).toFixed(2);
    this.meter = (this.feet * 0.3048).toFixed(2);
    this.feet = (this.feet * 12).toFixed(2);
  }
  clear() {
    this.mm = 0; this.cm = 0; this.feet = 0; this.meter = 0; this.feet = 0; this.inches = 0;
  }


}
