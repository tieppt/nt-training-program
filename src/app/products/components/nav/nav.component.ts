import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'np-product-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Output()
  navChanged = new EventEmitter<{type: string, value: any}>();
  @Input() activeFilter = 'all';

  constructor() { }

  ngOnInit() {
  }

  onFilter(value) {
    this.navChanged.emit({
      type: 'filter',
      value
    });
  }

}
