import './input_field.scss';
import template from './input_field.html';

var InputField =  {
      template: template,
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
