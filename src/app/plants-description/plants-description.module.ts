import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantsDescriptionPageRoutingModule } from './plants-description-routing.module';

import { PlantsDescriptionPage } from './plants-description.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantsDescriptionPageRoutingModule
  ],
  declarations: [PlantsDescriptionPage]
})
export class PlantsDescriptionPageModule {}
