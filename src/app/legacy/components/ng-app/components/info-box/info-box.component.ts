import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss']
})
export class InfoBoxComponent implements OnInit {

  constructor() {
    console.log('InfoBoxComp constructor');
  }


  ngOnInit(): void {
    console.log('InfoBoxComp ngOnInit');
  }

}
