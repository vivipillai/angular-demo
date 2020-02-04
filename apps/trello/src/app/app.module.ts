import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashelementComponent } from './dashelement/dashelement.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, DashelementComponent],
  imports: [BrowserModule, NoopAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
