import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuillModule } from 'ngx-quill';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from '#layout/main-layout/main-layout.component';
import { InformationService } from '#services/information.service';
import { CommonService } from '#services/common.service';
import { DialogService } from '#services/dialog.service';
import { ShareModule } from '#modules/share.module';

@NgModule({
  declarations: [AppComponent, MainLayoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ShareModule,
    QuillModule.forRoot()
  ],
  providers: [InformationService, CommonService, DialogService],
  bootstrap: [AppComponent]
})
export class AppModule {}
