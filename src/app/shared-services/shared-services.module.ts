import { NgModule } from '@angular/core';
import { MySharedService } from './my-shared.service';

@NgModule({
  imports: [
    // Uncomment to get Common Module in ModalLibModule to work...
    // ModalLibModule
  ],
  providers: [
    MySharedService
  ]
})
export class SharedServicesModule { }
