import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver'
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-octal-to-text',
  template: `
     <div class="container-fluid">
    <h1 class="mt-4 font-weight-bold">octal to text converter</h1>
    <div class="row">
    <div class="col-md-12"><app-binary-translator-filter [selectedOption1]="'octal'" [selectedOption]="'text'"></app-binary-translator-filter>
        </div>
        <div class="col-md-6">
            <h2>octal Input</h2>
            <form class="example-form mt-1"  [formGroup]="formGroup">
                <mat-form-field class="example-full-width" appearance="fill">
                    <mat-label>Type or Paste Your Content Here</mat-label>
                    <textarea id="octal" matInput rows="4" type="text" (keyup)="octalToText()"
                    formControlName="textValue" name="textEnter" placeholder="Ex. 10101"></textarea>
                    <button *ngIf="textValue" matSuffix mat-icon-button aria-label="Clear" (click)="textValue=''">
                        <mat-icon>close</mat-icon>
                    </button>
                </mat-form-field>
                <!-- <div class="error-message" *ngIf="formGroup.get('textValue')?.invalid && formGroup.get('textValue')?.touched">
                    Please enter a valid binary string
                </div> -->
            </form>
        </div>
        <div class="col-md-6">
            <h2>Text Output</h2>
            <form class="example-form mt-1">
                <mat-form-field class="example-full-width" appearance="fill">
                    <mat-label>Output
                    octal to Text Converter</mat-label>
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
        <h2><b>Octal To Text Converter Tool: Easily Translate Octal to Human-readable Text</b></h2>
        <h3><b>Introduction:</b></h3>
        <p class="pragraph-font">
         Are you working with octal code and need to translate it to human-readable text? Our octal to text converter tool can help you quickly and easily do just that.
        </p>
        <p class="pragraph-font">
        But first, let's explain what octal is and why you might need to convert it. Octal, or base 8, is a numeral system that uses 8 digits (0-7) to represent numbers. It is commonly used in computer programming and digital electronics because it can be represented using just three digits in binary form
        </p>
        <p class="pragraph-font">
        Octal code can be difficult for humans to read and understand, as it consists of a series of numbers and symbols. That's where our octal to text converter tool comes in. With just a few clicks, you can translate octal code into plain English, making it much easier to read and comprehend.
        </p>
        <p class="pragraph-font">
        To use our tool, simply enter the octal code in the input field and hit "Convert." The result will be displayed in the output field as plain English text. You can also switch between octal and English by using the "Swap" button.
       </p>

       <p class="pragraph-font">
       Not only is our octal to text converter tool fast and convenient, but it is also SEO-friendly. We have included relevant keywords such as "octal to English converter," "octal code," and "computer programming" to ensure that our tool can be easily discovered by search engines.
       </p>
       <p class="pragraph-font">
       So next time you need to translate octal code into human-readable text, don't waste your time trying to decipher it yourself. Use our octal to English converter tool and make your life easier. Try it out now
      </p>


    </div>
  `,
  styleUrls: ['./octal-to-text.component.scss']
})
export class OctalToTextComponent {
  textValue: string = '';
  changeTextValue: string = '';
  copiedText = '';
  formGroup = new FormGroup({
    textValue: new FormControl(null)
  });

  octalToText() {
    this.changeTextValue = this.formGroup.get('textValue')?.value ? String.fromCharCode(parseInt(this.formGroup.get('textValue')?.value!, 8)) : ''
  }


  createFile() {
    var blob = new Blob([this.changeTextValue], { type: 'text/plain;charset=utf-8' })
    saveAs(blob)
  }

  copyClipBoard() {
    navigator.clipboard.writeText(this.changeTextValue).then().catch(e => console.error(e));
  }
}
