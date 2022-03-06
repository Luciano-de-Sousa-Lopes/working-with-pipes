import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConvertFromMilesPipe } from './convert-from-miles.pipe';
import { CelsiusToFahrenheitPipe } from './celsius-to-fahrenheit.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ConvertFromMilesPipe,
    CelsiusToFahrenheitPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
