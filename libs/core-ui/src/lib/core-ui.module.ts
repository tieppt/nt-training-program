import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CoreUiComponent } from './core-ui.component';

const NG_MODULES = [
  LayoutModule,
  MatToolbarModule,
  MatBadgeModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSelectModule,
];

@NgModule({
  imports: [
    ...NG_MODULES
  ],
  declarations: [CoreUiComponent],
  exports: [
    CoreUiComponent,
    ...NG_MODULES
  ]
})
export class CoreUiModule { }
