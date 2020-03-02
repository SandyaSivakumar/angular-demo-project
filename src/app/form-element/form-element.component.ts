import { Component, OnInit,Input } from '@angular/core';
import {MatButton} from '@angular/material/button';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PieChartComponent } from '../pie-chart/pie-chart.component';
import { StackedChartComponent } from '../stacked-chart/stacked-chart.component';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Some Analytics on Software Data</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <table>
        <tr>
        <td><app-pie-chart></app-pie-chart></td>
        <td>The pie-chart represents the distribution of the languages used in the complete list of softwares.
        This is measured through the lines of code parameter which is associated with each software.</td>
        </tr>
        <tr>
        <td><app-stacked-chart></app-stacked-chart></td>
        <td>The stacked bar graph represents the distribution of the languages used in each application.
        The applications include CD Data Plane, Continuous Delivery Experience, CD Analytics</td>
        </tr>
      </table>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-form-element',
   templateUrl: './form-element.component.html',
})
export class FormElementComponent {
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(NgbdModalContent,{ size: 'xl' });
    modalRef.componentInstance.name = 'World';
  }
}
