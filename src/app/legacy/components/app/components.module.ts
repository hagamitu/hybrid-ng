import angular from 'angular';
import InputField from './components/input_field/input_field';

export const componentsModule = angular.module('yotpoApp.components', []);

componentsModule
  .component('inputField', InputField);
