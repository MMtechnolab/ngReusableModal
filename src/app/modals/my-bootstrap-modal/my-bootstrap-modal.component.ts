//import { Component, OnInit } from '@angular/core';

//@Component({
//  selector: 'app-my-bootstrap-modal',
//  templateUrl: './my-bootstrap-modal.component.html',
//  styleUrls: ['./my-bootstrap-modal.component.scss']
//})
//export class MyBootstrapModalComponent implements OnInit {

//  constructor() { }

//  ngOnInit(): void {
//  }

//}



import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-my-bootstrap-modal',
  templateUrl: './my-bootstrap-modal.component.html',
  styleUrls: ['./my-bootstrap-modal.component.scss']
})
export class MyBootstrapModalComponent implements OnInit {

  @Input() fromParent;

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
    console.log(this.fromParent);
    debugger;
    /* Output:
     {prop1: "Some Data", prop2: "From Parent Component", prop3: "This Can be anything"}
    */
  }

  closeModal(sendData) {
    this.activeModal.close(sendData);
  }

}



