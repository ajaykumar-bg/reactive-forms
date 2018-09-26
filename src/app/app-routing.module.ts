import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { BasicFormComponent } from './basic-form/basic-form.component';
import { NestedFormComponent } from './nested-form/nested-form.component';
import { DynamicArrayFormComponent } from './dynamic-array-form/dynamic-array-form.component';
import { ValidateFormComponent } from './validate-form/validate-form.component';


const routes: Routes = [
  { path: '', redirectTo: '/basic-form', pathMatch: 'full' },
  { path: 'basic-form', component: BasicFormComponent },
  { path: 'nested-form', component: NestedFormComponent },
  { path: 'dynamic-form-array', component: DynamicArrayFormComponent },
  { path: 'validation-form', component: ValidateFormComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
