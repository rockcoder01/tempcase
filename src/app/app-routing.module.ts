import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextCaseConvertComponent} from '../app/component/file-convert/text-caseconvert.component'
import { FontGenaratorComponent } from './component/font-genarator/font-genarator.component';
import { PagenotfoundComponentComponent } from './component/pagenotfound-component/pagenotfound-component.component';
import { StringJsonStringfyComponent } from './component/string-json-stringfy/string-json-stringfy.component';
import { StringToBinaryComponent } from './component/string-to-binary/string-to-binary.component';
import { WideTextConvertorComponent } from './component/wide-text-convertor/wide-text-convertor.component';

const routes: Routes = [
  {path:'',
   component:TextCaseConvertComponent,
   data:{
    title:'Convert Case',
    description:'convertcase tool is an online text and word processing utility it helps you to allow any text you would like to select and transform different cases',
   } 
  },
  {path:'snake-case-converter', component:TextCaseConvertComponent,
  data:{
    title:'Snake Case Converter Online Tool USA | Text Convert Case',
    description:'Are you looking for snake case converter tool online Text Convert case is one of the best online snake case converter tool online in USA. Try now!',
    keyword:'snake-case-converter'
  } 
  },
  {path:'vaporwave-widetext-convertor', 
   component:WideTextConvertorComponent,
  },
  {
    path:'insta',
    component:FontGenaratorComponent
  },
  {path:'bindarycode-to-english-translator',
   component:StringToBinaryComponent,
   data:{
    title:'Binary Code to English Translator Online Tool USA | Text Convert Case',
    description:'Text Convert Case is one of the best online tool in USA from which you can convert binary code to english in a few seconds. Explore Now',
    keyword:'snake case converter' 
   }
   },
  {path:'json-stringify-text',
   component:StringJsonStringfyComponent,
   data:{
    title:'json-stringify-text Online Tool USA | Text Convert Case',
    description:'convertcase tool is an online text and word processing utility it helps you to allow any text you would like to select and transform different cases',
    }
  },
  { path: '**',
   pathMatch: 'full',
   component: PagenotfoundComponentComponent,
   data:{
    title:'Page Not Found | Text Convert Case',
    description:'convertcase tool is an online text and word processing utility it helps you to allow any text you would like to select and transform different cases',
    }
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
