import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { NgxCopyToClipboardModule } from 'ngx-copy-to-clipboard';

import { BinaryTranslatorRoutingModule } from './binary-translator-routing.module';
import { OctalToBinaryComponent } from './octal-to-binary/octal-to-binary.component';
import { HextToBinaryComponent } from './hext-to-binary/hext-to-binary.component';
import { DecimalToBinaryComponent } from './decimal-to-binary/decimal-to-binary.component';
import { BinaryToOctalComponent } from './binary-to-octal/binary-to-octal.component';
import { BinaryToHexaComponent } from './binary-to-hexa/binary-to-hexa.component';
import { BinaryToDecimalComponent } from './binary-to-decimal/binary-to-decimal.component';
import { OctalToDecimalComponent } from './octal-to-decimal/octal-to-decimal.component';
import { OctalToHexadecimalComponent } from './octal-to-hexadecimal/octal-to-hexadecimal.component';
import { HexadecimalToDecimalComponent } from './hexadecimal-to-decimal/hexadecimal-to-decimal.component';
import { HexadecimalToOctalComponent } from './hexadecimal-to-octal/hexadecimal-to-octal.component';
import { DecimalToOctalComponent } from './decimal-to-octal/decimal-to-octal.component';
import { DecimalToHexadecimalComponent } from './decimal-to-hexadecimal/decimal-to-hexadecimal.component';
import { BinaryToTextComponent } from './binary-to-text/binary-to-text.component';
import { DecimalToTextComponent } from './decimal-to-text/decimal-to-text.component';
import { HexadecimalToTextComponent } from './hexadecimal-to-text/hexadecimal-to-text.component';
import { OctalToTextComponent } from './octal-to-text/octal-to-text.component';
import { TextToOctalComponent } from './text-to-octal/text-to-octal.component';
import { TextToHexaComponent } from './text-to-hexa/text-to-hexa.component';
import { TextToDecimalComponent } from './text-to-decimal/text-to-decimal.component';
import { BinaryTranslatorComponent } from './binary-translator/binary-translator.component';
import { MatSelectModule } from '@angular/material/select';
import { BinaryTranslatorFilterComponent } from './binary-translator-filter/binary-translator-filter.component';


@NgModule({
  declarations: [
    OctalToBinaryComponent,
    HextToBinaryComponent,
    DecimalToBinaryComponent,
    BinaryToOctalComponent,
    BinaryToHexaComponent,
    BinaryToDecimalComponent,
    OctalToDecimalComponent,
    OctalToHexadecimalComponent,
    HexadecimalToDecimalComponent,
    HexadecimalToOctalComponent,
    DecimalToOctalComponent,
    DecimalToHexadecimalComponent,
    BinaryToTextComponent,
    DecimalToTextComponent,
    HexadecimalToTextComponent,
    OctalToTextComponent,
    TextToOctalComponent,
    TextToHexaComponent,
    TextToDecimalComponent,
    BinaryTranslatorComponent,
    BinaryTranslatorFilterComponent
  ],
  imports: [
    CommonModule,
    BinaryTranslatorRoutingModule,
    MatSliderModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatSelectModule,
    NgxCopyToClipboardModule,
    HttpClientModule
  ],

})
export class BinaryTranslatorModule { }

