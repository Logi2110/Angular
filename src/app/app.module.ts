import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';    // it automatically add .ts at the end
import { MitComponent } from './mit/mit.component';
import { CompDatabindComponent } from './comp-databind/comp-databind.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { CompLifecycleComponent } from './comp-lifecycle/comp-lifecycle.component';
import { DirectiveComponent } from './directive/directive.component';

@NgModule({
  declarations: [
    AppComponent,            // register the component - hey i am part of this app
    MitComponent,
    CompDatabindComponent,
    DatabindingComponent,
    CompLifecycleComponent,
    DirectiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]    // recognize by index.html file
})
export class AppModule { }
