import 'angular';
import uiRouter from '@uirouter/angularjs';
import testPage from './test-page/test.controller';
import testPageRoutes from './test-page/test-page.route';

declare const angular: any;

export const yotpoAppModule = angular.module('yotpoApp', [
  uiRouter,
  'yotpoApp.services',
  'yotpoApp.components']);

yotpoAppModule.controller('test.controller', testPage);

yotpoAppModule.config(($locationProvider, $stateProvider) => {
  $locationProvider.html5Mode(true);

  testPageRoutes.forEach((route) => {
    $stateProvider.state(route.name, route.definition);
  });

  $stateProvider.state('angularjs_a', {
    url: '/angularjs_a',
    template: `
      <div style="background-color: yellow">
        <div>AngularJS A!</div>
        <div><a href="/angular_a">Go to Angular A</a></div>
        <div><a href="/angular_b">Go to Angular B</a></div>
        <div>Go to AngularJS A</div>
        <div><a href="/angularjs_b">Go to Angular JS B</a></div>
        <input-field></input-field>
        <info-box></info-box>
      </div>
    `
  });

  $stateProvider.state('angularjs_b', {
    url: '/angularjs_b',
    template: `
      <div style="background-color: yellow">
        <div>AngularJS B!</div>
        <div><a href="/angular_a">Go to Angular A</a></div>
        <div><a href="/angular_b">Go to Angular B</a></div>
        <div><a href="/angularjs_a">Go to Angular JS A</a></div>
        <div>Go to AngularJS B</div>
        <moderation></moderation>
        <mod-test></mod-test>
      </div>
    `
  });

  $stateProvider.state('sink', {
    url: '/*path',
    template: ''
  });
});

yotpoAppModule.run(['yCountries', '$rootScope', (yCountries, $rootScope) => {
  console.log('Running AngularJS application', yCountries);

  $rootScope.$on('$stateChangeStart', (e, toState, toParams) => {
    console.log('$stateChangeStart', toState, toParams);
  });
}]);
