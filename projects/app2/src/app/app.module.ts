import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { View2Component } from './view2/view2.component';
import { View1Component } from './view1/view1.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    View2Component,
    View1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }

export class App2SharedModule{
  static forRoot(): ModuleWithProviders { 
    const providers = []
    return {
      ngModule: AppModule,
      providers: providers
    }
  }
}
