import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feat1comp1',
  template: `
    <p>
      feat1comp1 works! translate:{{'MyTest' | translate}}
    </p>
  `,
  styles: [
  ]
})
export class Feat1comp1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
