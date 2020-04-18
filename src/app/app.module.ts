import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MitComponent } from './mit/mit.component';
import { CompDatabindComponent } from './comp-databind/comp-databind.component';

@NgModule({
  declarations: [
    AppComponent,
    MitComponent,
    CompDatabindComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
