import { Component, OnInit } from '@angular/core';
import { Software } from '../model/software';
import { SoftwareService } from '../service/software.service';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css']
})
export class ResultTableComponent implements OnInit {
  softwares: Sotware[];
  constructor(private softwareService:SoftwareService) {

  }

  ngOnInit(): void {
    this.softwareService.findAll().subscribe(data => {
          this.softwares = data;
        });
  }

}
