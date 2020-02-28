import { Component, OnInit ,Input} from '@angular/core';
import {MatCard} from '@angular/material/card';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@Component({
  selector: 'app-description-tab',
  templateUrl: './description-tab.component.html',
  styleUrls: ['./description-tab.component.css']
})
export class DescriptionTabComponent implements OnInit {
  @Input() application:string;
  @Input() service:string;
  @Input() serviceOwner:string;
  @Input() src:string;

  constructor() {

  }

  ngOnInit(): void {


  }

}

