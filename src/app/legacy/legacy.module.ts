import {servicesModule} from './services/app/services.module';
import {componentsModule} from './components/app/components.module';
import {yotpoAppModule} from './reviews/app/app.module';

import {Component, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
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
    console.log('bootstrap angularjs');
    upgrade.bootstrap(document.body, [
      servicesModule.name,
      componentsModule.name,
      yotpoAppModule.name
    ]);
    setUpLocationSync(upgrade);
  }
}
