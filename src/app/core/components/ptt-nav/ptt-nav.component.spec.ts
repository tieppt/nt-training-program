
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PttNavComponent } from './ptt-nav.component';

describe('PttNavComponent', () => {
  let component: PttNavComponent;
  let fixture: ComponentFixture<PttNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PttNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PttNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
