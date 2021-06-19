import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MySharedService } from './my-shared.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    MySharedService
  ]
})
export class SharedServicesModule { }
