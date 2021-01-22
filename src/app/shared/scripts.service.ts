import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScriptsService {

  constructor() {
  }

  loadScript(): Observable<boolean> {
    return of(true).pipe(delay(500));
  }
}
