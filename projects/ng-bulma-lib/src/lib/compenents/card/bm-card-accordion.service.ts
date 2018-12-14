import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class BmCardToggleService {
  private subject = new Subject<any>();

  setToggleState(toggleState: boolean) {
    this.subject.next({ isCollapsed: toggleState });
  }

  getToggleState(): Observable<any> {
    return this.subject.asObservable();
  }
}
