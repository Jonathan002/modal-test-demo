import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedServicesModule } from '../shared-services/shared-services.module';
import { LazyComponent } from './lazy/lazy.component';

@NgModule({
  declarations: [LazyComponent],
  imports: [
    SharedServicesModule,
    RouterModule.forChild([
      { path: '', component: LazyComponent }
    ])
  ]
})
export class LazyModule { }
