import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmToInchesComponent } from './cm-to-inches/cm-to-inches.component';
import { LengthCaculatorRoutingModule } from './length-caculator-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import { DaynamicCmToInchesComponent } from './daynamic-cm-to-inches/daynamic-cm-to-inches.component';


@NgModule({
  declarations: [
    CmToInchesComponent,
    DaynamicCmToInchesComponent
  ],
  imports: [
    LengthCaculatorRoutingModule,
    CommonModule,
    MatSliderModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatCardModule
  ]
})
export class LengthCaculatorModule { }
