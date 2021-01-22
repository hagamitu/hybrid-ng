import angular from 'angular';
import CountriesService from './countries.service';
import lodash from 'lodash';

export const servicesModule = angular.module('yotpoApp.services', []);
servicesModule
  .constant('lodash', lodash)
  .factory('yCountries', CountriesService);
