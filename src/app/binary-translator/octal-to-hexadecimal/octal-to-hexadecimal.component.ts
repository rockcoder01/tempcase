import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver'
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router'


@Component({
  selector: 'app-octal-to-hexadecimal',
  template: `
     <div class="container-fluid">
    <h1 class="mt-4 font-weight-bold">ctal to hexadecimal converter</h1>
    <div class="row">
    <div class="col-md-12"><app-binary-translator-filter [selectedOption1]="'octal'" [selectedOption]="'hexadecimal'"></app-binary-translator-filter>
        </div>
        <div class="col-md-6">
            <h2>octal Input</h2>
            <form class="example-form mt-1"  [formGroup]="formGroup">
                <mat-form-field class="example-full-width" appearance="fill">
                    <mat-label>Type or Paste Your Content Here</mat-label>
                    <textarea id="octal" matInput rows="4" type="text" required pattern="[0-7]*" (keyup)="binaryToHexa()"
                    formControlName="textValue" name="textEnter" placeholder="Ex. 10101"></textarea>
                    <button *ngIf="textValue" matSuffix mat-icon-button aria-label="Clear" (click)="textValue=''">
                        <mat-icon>close</mat-icon>
                    </button>
                </mat-form-field>
                <div class="error-message" *ngIf="formGroup.get('textValue')?.invalid && formGroup.get('textValue')?.touched">
                    Please enter a valid octal string
                  </div>
            </form>
        </div>
        <div class="col-md-6">
            <h2>hexadecimal Output</h2>
            <form class="example-form mt-1">
                <mat-form-field class="example-full-width" appearance="fill">
                    <mat-label>Output
                        octal to decimal Converter</mat-label>
                    <textarea matInput rows="4" [(ngModel)]="changeTextValue" id="text-content-change" name="changetext"
                        ></textarea>
                </mat-form-field>
            </form>
            <button mat-flat-button class="mx-1 my-1" color="primary" (click)="copyClipBoard()">Copy clipboard</button>
            <button mat-flat-button (click)="createFile()" class="mx-1 my-1" color="primary">Create File</button>
        </div>
    </div>

    <hr>
    <div class="p-4">
        <h2><b>octal to hexadecimal converter overview</b></h2>
        <h3><b>Introduction:</b></h3>
        <p class="pragraph-font">
        Octal to hexadecimal conversion is a common task in computer science and is often used to represent large numbers in a more compact form. In this overview, we will discuss the concept of octal to hexadecimal conversion and the unique features and benefits of this process.
        </p>

        <p class="pragraph-font">
        First, let's define what octal to hexadecimal converter are. Octal numbers are a base-8 numbering system, which means that they consist of eight digits: 0, 1, 2, 3, 4, 5, 6, and 7. Hexadecimal numbers are a base-16 numbering system, which means that they consist of 16 digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, and F.
        </p>


        <p class="pragraph-font">
         Now that we have a basic understanding of octal and hexadecimal numbers, let's look at the concept of octal to hexadecimal conversion. This process involves converting an octal number to its equivalent hexadecimal number using a combination of mathematical operations and string manipulation using octal to hexadecimal decoder.
        </p>
        <p class="pragraph-font">
         Another advantage of octal to hexadecimal converter is that it can be easily implemented in computers and other digital devices. Both octal and hexadecimal numbers can be represented using a combination of digits, making them a popular choice for storing and transmitting data in the digital world.
      </p>
        <p class="pragraph-font">
          In conclusion, octal to hexadecimal converter is a useful tool for representing large numbers in a more compact and easily readable form, and for working with numbers in computers and other digital devices.
        </p>
    </div>
  `,
  styleUrls: ['./octal-to-hexadecimal.component.scss']
})
export class OctalToHexadecimalComponent {
  textValue: string = '';
  changeTextValue: string = '';
  copiedText = '';
  formGroup = new FormGroup({
    textValue: new FormControl('')
  });

  binaryToHexa() {
    const regex = /^[0-7]*$/;
    if (regex.test(this.formGroup.get('textValue')?.value!)) {
      this.changeTextValue = this.formGroup.get('textValue')?.value ? parseInt(this.formGroup.get('textValue')?.value!, 8).toString(16) : ''
    }

  }

  createFile() {
    var blob = new Blob([this.changeTextValue], { type: 'text/plain;charset=utf-8' })
    saveAs(blob)
  }

  copyClipBoard() {
    navigator.clipboard.writeText(this.changeTextValue).then().catch(e => console.error(e));
  }

}
