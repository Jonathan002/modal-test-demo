import { Component } from '@angular/core';
import { MySharedService } from './../../shared-services/my-shared.service';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss']
})
export class LazyComponent {

  constructor(
    public mySharedService: MySharedService
  ) { }

}
