import angular from 'angular';
import CountriesService from './countries.service';
import lodash from 'lodash';

export const module = angular.module('AngularJSServices', [])
  .constant('lodash', lodash)
  .factory('yCountries', CountriesService);
