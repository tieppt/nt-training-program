import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreUiModule } from '@nttp/core-ui';

import { PttNavComponent } from './components/ptt-nav/ptt-nav.component';
import { AppComponent } from './containers/app.component';

@NgModule({
  declarations: [
    AppComponent,
    PttNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreUiModule
  ],
  exports: [
    AppComponent,
    PttNavComponent
  ],
})
export class CoreModule {}
