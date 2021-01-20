import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InfoBoxComponent} from './components/info-box/info-box.component';
import {downgradeComponent} from '@angular/upgrade/static';


@NgModule({
  declarations: [InfoBoxComponent],
  exports: [InfoBoxComponent],
  imports: [
    CommonModule
  ]
})
export class NgComponentsModule {
  constructor() {
    console.log('NgComponentsModule');
  }
}

declare const angular: any;
console.log('before info-box direcive');
angular.module('AngularJSComponents')
  .directive('infoBox', downgradeComponent({component: InfoBoxComponent}));
