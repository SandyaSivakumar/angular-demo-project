import { Component, OnInit ,Input} from '@angular/core';
import {MatCard} from '@angular/material/card';

@Component({
  selector: 'app-description-tab',
  templateUrl: './description-tab.component.html',
  styleUrls: ['./description-tab.component.css']
})
export class DescriptionTabComponent implements OnInit {
  @Input() description:string;
  constructor() { }

  ngOnInit(): void {
  }

}
