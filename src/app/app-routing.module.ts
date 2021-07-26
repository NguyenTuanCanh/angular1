import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from './user.guard';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { LifecycleHookComponent } from './lifecycle-hook/lifecycle-hook.component';
import { Children1Component } from './children1/children1.component';
import { Children2Component } from './children2/children2.component';
import { UserService } from './Services/user.service';
import { NavigateGuard } from './navigate.guard';
import { NaviGuard } from './navi.guard';

const routes: Routes = [
  {
    path : "",
    component : HomeComponent,
  },
  {
    path : "about",
    component : AboutComponent,
    canDeactivate : [NaviGuard]
  },
  {
    path : "form",
    component : FormComponent
  },
  {
    path : "reactive-form",
    component : ReactiveFormComponent,
  },
  {
    path : "lifecycle",
    component : LifecycleHookComponent,
    canActivate : [UserGuard],
    children: [
      {
        path: ':id',
        component: Children1Component,
      },
    ],
  },
  {
    path : "**",
    component : NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
