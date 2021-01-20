// import { module } from "./app.module";
//
// const angularjs_c = {
//   template: `
//   <div class="input-field-holder" ng-style="{ 'width': $ctrl.inputWidth }">
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
//   bindings: {
//     title: '@',
//     automationId: '@',
//     placeholder: '@',
//     inputWidth: '@',
//     required: '@',
//     inputText: '=',
//     inputType: '@',
//     minLength: '<',
//     name: '@'
//   },
//   controller: [function () {
//     const self = this;
//
//     self.$onInit = function () {
//       console.log('on init hello world');
//       self.minLength = self.minLength || 0;
//     };
//   }]
// };
//
// module.component('angularjs_c', angularjs_c);
