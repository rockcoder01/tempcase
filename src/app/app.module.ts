import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './component/header/header.component';
import { TextCaseConvertComponent } from './component/file-convert/text-caseconvert.component';

import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { NgxCopyToClipboardModule } from 'ngx-copy-to-clipboard';
import { WideTextConvertorComponent } from './component/wide-text-convertor/wide-text-convertor.component';
import { StringToBinaryComponent } from './component/string-to-binary/string-to-binary.component';
import { StringJsonStringfyComponent } from './component/string-json-stringfy/string-json-stringfy.component';
import { PagenotfoundComponentComponent } from './component/pagenotfound-component/pagenotfound-component.component';
import { FooterComponent } from './component/footer/footer.component';
import { FontGenaratorComponent } from './component/font-genarator/font-genarator.component';
import { MetaService } from './service/meta-service.service';
import { TitleCaseConverterComponent } from './component/title-case-converter/title-case-converter.component';
import { UppercaseToLowercaseComponent } from './component/uppercase-to-lowercase/uppercase-to-lowercase.component';
import { LowercaseToUppercaseComponent } from './component/lowercase-to-uppercase/lowercase-to-uppercase.component';
import { AlternatingCaseConverterComponent } from './component/alternating-case-converter/alternating-case-converter.component';
import { SentenceCaseConvertertComponent } from './component/sentence-case-convertert/sentence-case-convertert.component';
import { SnakeCaseConverterComponent } from './component/snake-case-converter/snake-case-converter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TextCaseConvertComponent,
    WideTextConvertorComponent,
    StringToBinaryComponent,
    StringJsonStringfyComponent,
    PagenotfoundComponentComponent,
    FooterComponent,
    FontGenaratorComponent,
    TitleCaseConverterComponent,
    UppercaseToLowercaseComponent,
    LowercaseToUppercaseComponent,
    AlternatingCaseConverterComponent,
    SentenceCaseConvertertComponent,
    SnakeCaseConverterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressBarModule,
    NgxCopyToClipboardModule,
    HttpClientModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
