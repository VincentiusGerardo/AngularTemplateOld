import { UIRouterModule } from '@uirouter/angular';
import { TopnavComponent } from './layout/topnav.component';
import { LayoutComponent } from './layout/layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TestComponent } from './test/test.component';
import { states, uiRouterConfig } from './config.routes';
import { CommonModule } from './common/common.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    TopnavComponent,
    AboutComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    UIRouterModule.forRoot({ 
      states: states,
      useHash: true,
      config: uiRouterConfig
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
