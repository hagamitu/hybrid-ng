import './input_field.scss';
//import template from './input_field.html';

var InputField =  {
      templateUrl: './src/app/legacy/components/app/components/input_field/input_field.html',
//   template: `<div class="input-field-holder" ng-style="{ 'width': $ctrl.inputWidth }">
//   <label ng-bind="$ctrl.title"></label>
//   <input
//     automationid={{$ctrl.automationId}}
//     class="form-control"
//     type="{{$ctrl.inputType}}"
//     ng-model="$ctrl.inputText"
//     ng-minlength="$ctrl.minLength"
//     placeholder={{$ctrl.placeholder}}
//     ng-required="{{$ctrl.required}}"
//     name="{{$ctrl.name}}"/>
// </div>`,
      bindings: {
        title: '@',
        automationId: '@',
        placeholder: '@',
        inputWidth: '@',
        required: '@',
        inputText: '=',
        inputType: '@',
        minLength: '<',
        name: '@'
      },
      controller: [function () {
          var self = this;

          self.$onInit = function () {
              console.log('on init hello world');
              self.minLength = self.minLength || 0;
          };
      }]
    };

export default InputField;
