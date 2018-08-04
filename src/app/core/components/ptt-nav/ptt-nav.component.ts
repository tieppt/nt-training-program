import { Component, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'np-nav',
  templateUrl: './ptt-nav.component.html',
  styleUrls: ['./ptt-nav.component.scss']
})
export class PttNavComponent {
  @Input()
  totalCartItem = 0;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

  onNavigate() {
    console.log(123);
  }

}
