import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { SharedServicesModule } from './shared-services/shared-services.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedServicesModule.forRoot(),
    RouterModule.forRoot([
      { path: '**', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) }
    ]),
    NgbModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
