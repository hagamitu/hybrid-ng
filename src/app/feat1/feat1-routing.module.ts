import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Feat1comp1Component} from './feat1comp1.component';

const routes: Routes = [
  {
    path: 'comp1',
    component: Feat1comp1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Feat1RoutingModule { }
