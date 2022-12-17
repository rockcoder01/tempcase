import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextCaseConvertComponent } from '../app/component/file-convert/text-caseconvert.component'
import { AlternatingCaseConverterComponent } from './component/alternating-case-converter/alternating-case-converter.component';
import { FontGenaratorComponent } from './component/font-genarator/font-genarator.component';
import { LowercaseToUppercaseComponent } from './component/lowercase-to-uppercase/lowercase-to-uppercase.component';
import { PagenotfoundComponentComponent } from './component/pagenotfound-component/pagenotfound-component.component';
import { SentenceCaseConvertertComponent } from './component/sentence-case-convertert/sentence-case-convertert.component';
import { SnakeCaseConverterComponent } from './component/snake-case-converter/snake-case-converter.component';
import { StringJsonStringfyComponent } from './component/string-json-stringfy/string-json-stringfy.component';
import { StringToBinaryComponent } from './component/string-to-binary/string-to-binary.component';
import { TitleCaseConverterComponent } from './component/title-case-converter/title-case-converter.component';
import { UppercaseToLowercaseComponent } from './component/uppercase-to-lowercase/uppercase-to-lowercase.component';
import { WideTextConvertorComponent } from './component/wide-text-convertor/wide-text-convertor.component';

const routes: Routes = [
  {
    path: '',
    component: TextCaseConvertComponent,
    data: {
      title: 'Convert Case',
      description: 'convertcase tool is an online text and word processing utility it helps you to allow any text you would like to select and transform different cases',
    }
  },
  {
    path: 'snake-case-converter', component: SnakeCaseConverterComponent,
    data: {
      title: 'Snake Case Converter | Text Convert Case',
      description: 'Are you looking for snake case converter tool online Text Convert case is one of the best online snake case converter tool online in USA. Try now!',
      keyword: 'snake case converter'
    }
  },
  {
    path: 'alternating-case-converter', component: AlternatingCaseConverterComponent,
    data: {
      title: 'Alternating Case Converter | Text Convert Case',
      description: 'Are you looking for alternating case converter tool online Text Convert case is one of the best online alternating case converter tool online in USA. Try now!',
      keyword: 'alternating case converter'
    }
  },
  {
    path: 'uppercase-to-lowercase', component: UppercaseToLowercaseComponent,
    data: {
      title: 'Uppercase To Lowercase Converter | Text Convert Case',
      description: 'Are you looking for uppercase to lowercase converter tool online Text Convert case is one of the best online uppercase to lowercase converter tool online in USA. Try now!',
      keyword: 'uppercase to lowercase converter'
    }
  },
  {
    path: 'lowercase-to-uppercase', component: LowercaseToUppercaseComponent,
    data: {
      title: 'Lowercase To Uppercase Converter | Text Convert Case',
      description: 'Are you looking for lowercase to uppercase converter tool online Text Convert case is one of the best lowercase to uppercase converter tool online in USA. Try now!',
      keyword: 'lowercase to uppercase converter'
    }
  },
  {
    path: 'sentence-case-converter', component: SentenceCaseConvertertComponent,
    data: {
      title: 'Sentence Case Converter Online Tool USA | Text Convert Case',
      description: 'Are you looking for sentence case converter tool online Text Convert case is one of the best online sentence case converter tool online in USA. Try now!',
      keyword: 'sentence case converter'
    }
  },
  {
    path: 'title-case-converter', component: TitleCaseConverterComponent,
    data: {
      title: 'Title case converter | Text Convert Case',
      description: 'Are you looking for title case converter tool online Text Convert case is one of the best online title case converter tool online in USA. Try now!',
      keyword: 'Title Case Converter, convert title case, convert to title case, convert case net'
    }
  },
  {
    path: 'vaporwave-widetext-convertor',
    component: WideTextConvertorComponent,
  },
  {
    path: 'insta',
    component: FontGenaratorComponent
  },
  {
    path: 'bindarycode-to-english-translator',
    component: StringToBinaryComponent,
    data: {
      title: 'Binary Code to English Translator Online Tool USA | Text Convert Case',
      description: 'Text Convert Case is one of the best online tool in USA from which you can convert binary code to english in a few seconds. Explore Now',
      keyword: 'Binary Code to English'
    }
  },
  {
    path: 'english-to-binary-translator',
    component: StringToBinaryComponent,
    data: {
      title: 'English To Binary Translator Online Tool USA | Text Convert Case',
      description: 'Text Convert Case is one of the best online tool in USA from which you can convert English To Binary in a few seconds. Explore Now',
      keyword: 'english to binary translator, english to binary'
    }
  },
  {
    path: 'json-stringify-text',
    component: StringJsonStringfyComponent,
    data: {
      title: 'json-stringify-text Online Tool USA | Text Convert Case',
      description: 'convertcase tool is an online text and word processing utility it helps you to allow any text you would like to select and transform different cases',
    }
  },
  {
    path: '**',
    pathMatch: 'full',
    component: PagenotfoundComponentComponent,
    data: {
      title: 'Page Not Found | Text Convert Case',
      description: 'convertcase tool is an online text and word processing utility it helps you to allow any text you would like to select and transform different cases',
    }
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
