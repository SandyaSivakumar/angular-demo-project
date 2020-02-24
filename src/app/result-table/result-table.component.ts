import { Component, OnInit, ViewChild } from '@angular/core';
import { Software } from '../model/software';
import { SoftwareServiceService } from '../service/software-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatInput } from '@angular/material/input'



@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css'],
  providers: [SoftwareServiceService]
})

export class ResultTableComponent implements OnInit{
  displayedColumns: string[] = ['softwareId','softwareName', 'languageUsed', 'createdDate', 'owner','views'];
  softwares: Software[];
  dataSource: MatTableDataSource<Software>;


//     @ViewChild(MatPaginator) paginator: MatPaginator;
//     @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

    constructor(public softwareService:SoftwareServiceService) {

    }

    ngOnInit(): void {
        this.softwareService.findAll().subscribe(
        data => {
              console.log(data);
              this.softwares = data;
              this.dataSource = new MatTableDataSource(this.softwares);
              this.dataSource.paginator = this.paginator;

            });

//         this.dataSource.sort = this.sort;

    }


        applyFilter(event: Event) {
            const filterValue = (event.target as HTMLInputElement).value;
            this.dataSource.filter = filterValue.trim().toLowerCase();
          }
}

