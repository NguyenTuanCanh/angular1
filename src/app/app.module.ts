import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ColorZDirective } from './Directives/color-z.directive';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { LifecycleHookComponent } from './lifecycle-hook/lifecycle-hook.component';
import { UserService } from './Services/user.service';
import { Children1Component } from './children1/children1.component';
import { Children2Component } from './children2/children2.component';
import { NavigateGuard } from './navigate.guard';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    ColorZDirective,
    FormComponent,
    ReactiveFormComponent,
    LifecycleHookComponent,
    Children1Component,
    Children2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
