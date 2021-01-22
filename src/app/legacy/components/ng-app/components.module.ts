import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InfoBoxComponent} from './components/info-box/info-box.component';
import {downgradeComponent} from '@angular/upgrade/static';
import {componentsModule} from '../app/components.module';
import {SharedModule} from '../../../shared/shared.module';


@NgModule({
  declarations: [InfoBoxComponent],
  exports: [InfoBoxComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class NgComponentsModule {
  constructor() {
    console.log('NgComponentsModule');
  }
}

componentsModule
  .directive('infoBox', downgradeComponent({component: InfoBoxComponent}));
