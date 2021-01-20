import {Component, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import * as AngularJSServices from './services/app/services.module';
import * as AngularJSComponents from './components/app/components.module';
import * as Reviews from './reviews/app/app.module';
import {UpgradeModule} from '@angular/upgrade/static';
import {RouterModule} from '@angular/router';
import {setUpLocationSync} from '@angular/router/upgrade';
import {AppModule} from './reviews/ng-app/app.module';
import {NgComponentsModule} from './components/ng-app/components.module';
import {NgServicesModule} from './services/ng-app/services.module';

@Component({template: ``})
export class EmptyComponent {
  constructor() {
    console.log('EmptyComponent');
  }
}

@NgModule({
  declarations: [
    EmptyComponent
  ],
  imports: [
    CommonModule,
    UpgradeModule,
    RouterModule.forChild([
      {path: '**', component: EmptyComponent}
    ]),
    AppModule,
    NgServicesModule,
    NgComponentsModule
  ]
})
export class LegacyModule {
  // The constructor is called only once, so we bootstrap the application
  // only once, when we first navigate to the legacy part of the app.
  constructor(upgrade: UpgradeModule) {
    console.log('bootstrap angularjs', [AngularJSServices.module, Reviews.module]);
    upgrade.bootstrap(document.body, [
      AngularJSServices.module.name,
      AngularJSComponents.module.name,
      Reviews.module.name
    ]);
    setUpLocationSync(upgrade);
  }
}
