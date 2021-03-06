import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpClientModule } from '@angular/common/http';
import { QuillModule } from 'ngx-quill';
import { ImageCropperModule } from 'ngx-image-cropper';

import { BaseDatatableComponent } from '#components/shared/base-datatable/base-datatable.component';
import { SomeDialogComponent } from '#components/shared/some-dialog/some-dialog.component';
import { OtherDialogComponent } from '#components/shared/other-dialog/other-dialog.component';
import { EmitterComponent } from '#components/shared/emitter/emitter.component';
import { MatTabScrollRetainerDirective } from '#shared/directives/mat-tab-scroll-retainer.directive';
import { OnlyNumberDirective } from '#shared/directives/only-number.directive';

const MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  NgxDatatableModule,
  HttpClientModule,
  QuillModule,
  ImageCropperModule
];

const MATERIAL_MODULES = [
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatIconModule,
  MatDividerModule,
  MatButtonModule,
  MatSelectModule,
  MatRadioModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatExpansionModule,
  MatChipsModule,
  MatTabsModule,
  MatTreeModule,
  MatRippleModule
];

const COMPONENTS = [
  BaseDatatableComponent,
  SomeDialogComponent,
  OtherDialogComponent,
  EmitterComponent,
  MatTabScrollRetainerDirective,
  OnlyNumberDirective
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES, ...MATERIAL_MODULES],
  exports: [...MODULES, ...MATERIAL_MODULES, ...COMPONENTS]
})
export class ShareModule {}
