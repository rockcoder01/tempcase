import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-binary-translator-filter',
  template: `
  <!-- <div class="container-fluid"> -->
    <div class="row">
    <div class="col-md-6">
      <mat-form-field>
                <mat-label>Choose an option</mat-label>
                <mat-select (selectionChange)="updateConverter()" [(value)]="selectedOption1">
                    <mat-option *ngFor="let option of options" [disabled]="option === selectedOption" [value]="option">{{option}}</mat-option>
                </mat-select>
      </mat-form-field>
      </div>
      <div class="col-md-6">
      <mat-form-field>
                <mat-label>Choose an option</mat-label>
                <mat-select (selectionChange)="updateConverter()" [(value)]="selectedOption">
                    <mat-option *ngFor="let option of options" [disabled]="option === selectedOption1" [value]="option">{{option}}</mat-option>
                </mat-select>
      </mat-form-field>
      </div>
    </div>
  <!-- </div> -->
  `,
  styleUrls: ['./binary-translator-filter.component.scss']
})
export class BinaryTranslatorFilterComponent implements OnInit {
  @Input() selectedOption1: string = "binary"
  @Input() selectedOption: string = "decimal"
  options = ['binary','octal', 'text', 'decimal', 'hexadecimal'];

  constructor(private router: Router) { }

  updateConverter() {
    if(this.selectedOption1 === 'text' && this.selectedOption === 'binary'){
      this.router.navigate([`binary-translator`])
    }
    else{
     this.router.navigate([`binary-translator/${this.selectedOption1}-to-${this.selectedOption}-converter`])
    }
  }

  ngOnInit(): void {
  }

}
