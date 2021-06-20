import { NgModule } from '@angular/core';
import { MySharedService } from './my-shared.service';

@NgModule({
  imports: [
    // Uncomment to get Common Module in ModalLibModule to work...
    // ModalLibModule
  ],
})
export class SharedServicesModule {

  static forRoot() {
    return {
      ngModule: SharedServicesModule,
      providers: [
        MySharedService
      ]
    }
  }

}
