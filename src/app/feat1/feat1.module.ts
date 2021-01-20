import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feat1RoutingModule } from './feat1-routing.module';
import { Feat1comp1Component } from './feat1comp1.component';
import {TranslateModule, TranslateService} from '@ngx-translate/core';


@NgModule({
  declarations: [Feat1comp1Component],
  imports: [
    CommonModule,
    Feat1RoutingModule,
    TranslateModule
  ]
})
export class Feat1Module {
  constructor(private translateService: TranslateService) {
    console.log('load AppModule');
    this.translateService.setTranslation('en', {MyTest: 'HAIM'}, true);
  }
}
