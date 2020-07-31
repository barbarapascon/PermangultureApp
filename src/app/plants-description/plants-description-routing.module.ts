import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantsDescriptionPage } from './plants-description.page';

const routes: Routes = [
  {
    path: '',
    component: PlantsDescriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantsDescriptionPageRoutingModule {}
