import { Component, OnInit } from '@angular/core';
import {ScriptsService} from '../../../../../shared/scripts.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss']
})
export class InfoBoxComponent implements OnInit {

  obs$: Observable<boolean>;

  constructor(private scriptsService: ScriptsService) {
    console.log('InfoBoxComp constructor');
  }


  ngOnInit(): void {
    console.log('InfoBoxComp ngOnInit');
    this.obs$ = this.scriptsService.loadScript();
  }

}
