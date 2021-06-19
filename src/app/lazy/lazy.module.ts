import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LazyComponent } from './lazy/lazy.component';



@NgModule({
  declarations: [LazyComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: LazyComponent }
    ])
  ]
})
export class LazyModule { }
