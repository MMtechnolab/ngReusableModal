import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MyBootstrapModalComponent } from '../modals/my-bootstrap-modal/my-bootstrap-modal.component';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  selectedPackage: any = "";
  data: any = {
    title: "",
    body: "",
  }
  constructor(private modalService: NgbModal, @Inject(DOCUMENT) document) { }

  ngOnInit(): void {
  }

  packageSelected(packageId) {
    this.selectedPackage = "package" + packageId;
    var htmlTitle = document.getElementById('package-head' + packageId).innerHTML;
    var htmlBody = document.getElementById('package-body' + packageId).innerHTML;
    this.data.title = htmlTitle;
    this.data.body = htmlBody;
    this.openModal();
  }


  openModal() {
    const modalRef = this.modalService.open(MyBootstrapModalComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
        // keyboard: false,
        // backdrop: 'static'
      });

    modalRef.componentInstance.fromParent = this.data;
    modalRef.result.then((result) => {
      console.log(result);
    }, (reason) => {
    });
  }

}
