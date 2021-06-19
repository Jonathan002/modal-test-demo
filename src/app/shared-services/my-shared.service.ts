import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal-lib/modal/modal.component';

@Injectable()
export class MySharedService {

  constructor(
    private modalService: NgbModal
  ) {}

  openModal() {
    this.modalService.open(ModalComponent);
  }

}
