
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './helpers';

import {AppRoutingModule,RoutingComponents} from "./app-routing.module";
import { AppComponent } from './app.component';

import { StudentService } from './employee-list/student.service';

import { HomeComponent } from './home';
import { LoginComponent } from './login';

import { JwtInterceptor, ErrorInterceptor } from './helpers';
import {RegisterComponent} from "./register";




@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    HomeComponent,
    LoginComponent,
    RegisterComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule

  ],
  providers: [
    StudentService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
