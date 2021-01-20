import angular from 'angular';
import InputField from './components/input_field/input_field';

console.log('before AngularJSComponents init');
export const module = angular
  .module('AngularJSComponents', [])
  .component('inputField', InputField);
