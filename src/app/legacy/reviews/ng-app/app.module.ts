import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModerationComponent} from './moderation/moderation.component';
import {ModTestComponent} from './mod-test/mod-test.component';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {downgradeComponent} from '@angular/upgrade/static';


@NgModule({
  declarations: [ModerationComponent, ModTestComponent],
  exports: [ModerationComponent, ModTestComponent],
  entryComponents: [ModerationComponent],
  imports: [
    CommonModule,
    TranslateModule
  ]
})
export class AppModule {
  constructor(private translateService: TranslateService) {
    console.log('load NgAppModule');
    this.translateService.setTranslation('en', {MyTest2: 'TEST2'}, true);
  }
}

declare const angular: any;
console.log('before moderation direcive');
angular.module('AngularJSApp')
  .directive('moderation', downgradeComponent({component: ModerationComponent}))
  .directive('modTest', downgradeComponent({component: ModTestComponent}));
