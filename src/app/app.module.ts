import { UIRouterModule } from '@uirouter/angular';
import { TopnavComponent } from './layout/topnav.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TestComponent } from './test/test.component';
import { states, uiRouterConfig } from './config.routes';
import { CommonModule } from './common/common.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopnavComponent,
    AboutComponent,
    TestComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    UIRouterModule.forRoot({ 
      states: states,
      useHash: true,
      config: uiRouterConfig
    }),
    NgbModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
