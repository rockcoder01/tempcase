import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextCaseConvertComponent} from '../app/component/file-convert/text-caseconvert.component'
const routes: Routes = [
  {path:'', redirectTo:'text-convertcase',pathMatch:'full' },
  {path:'text-convertcase', component:TextCaseConvertComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
