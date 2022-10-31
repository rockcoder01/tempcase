import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextCaseConvertComponent} from '../app/component/file-convert/text-caseconvert.component'
import { PagenotfoundComponentComponent } from './component/pagenotfound-component/pagenotfound-component.component';
import { StringJsonStringfyComponent } from './component/string-json-stringfy/string-json-stringfy.component';
import { StringToBinaryComponent } from './component/string-to-binary/string-to-binary.component';
import { WideTextConvertorComponent } from './component/wide-text-convertor/wide-text-convertor.component';

const routes: Routes = [
  {path:'', component:TextCaseConvertComponent },
  {path:'vaporwave-widetext-convertor', component:WideTextConvertorComponent },
  {path:'string-to-bindarycode', component:StringToBinaryComponent },
  {path:'json-stringify-text', component:StringJsonStringfyComponent },
  { path: '**', pathMatch: 'full', component: PagenotfoundComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
