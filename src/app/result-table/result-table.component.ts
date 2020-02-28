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
  myApplication:string;
  clicked:boolean;
  myService:string;
  linesOfJava:number[];
  linesOfPython:number[];
  linesOfGo:number[];
  linesOfTypeScript:number[];
  myServiceOwner:string;
  mySrc:string;
  dataSource: MatTableDataSource<Software>;
  postdata:Software;
  spresp:any;
  updatedViews:number;

//     @ViewChild(MatPaginator) paginator: MatPaginator;
//     @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

    constructor(public softwareService:SoftwareServiceService) {
    this.clicked=false;

    }

    ngOnInit(): void {

        this.softwareService.findAll().subscribe(
        data => {
              console.log(data);
              this.softwares = data;
              this.dataSource = new MatTableDataSource(this.softwares);
              this.dataSource.paginator = this.paginator;
              for(let i=0;i<this.softwares.length;i++){
                if(this.softwares[i].languageUsed=="Java"){
                     this.linesOfJava.push(this.softwares[i].linesOfCode);
                }
                else if(this.softwares[i].languageUsed=="Python"){
                     this.linesOfPython.push(this.softwares[i].linesOfCode);
                }
                else if(this.softwares[i].languageUsed=="TypeScript"){
                     this.linesOfTypeScript.push(this.softwares[i].linesOfCode);
                }
                else if(this.softwares[i].languageUsed=="Go"){
                     this.linesOfGo.push(this.softwares[i].linesOfCode);
                }
              }
              console.log(this.linesOfJava);
              console.log(this.linesOfGo);
              console.log(this.linesOfTypeScript);
              console.log(this.linesOfPython);
            });
    }
        applyFilter(event: Event) {
            const filterValue = (event.target as HTMLInputElement).value;
            this.dataSource.filter = filterValue.trim().toLowerCase();
          }
        getRecord(row){
          this.clicked=true;
          console.log(row.application);
          this.myApplication = row.application;
          this.myService = row.service;
          this.myServiceOwner = row.serviceOwner;

                      if(row.languageUsed=="Java"){
                        this.mySrc = "assets/img/java-logo2.png";

                      }
                      else if(row.languageUsed=="Python"){
                        this.mySrc = "assets/img/python-logo2.png";

                      }
                      else if(row.languageUsed=="TypeScript"){
                        this.mySrc = "assets/img/typescript-logo.png";

                      }
                      else if(row.languageUsed=="Go"){
                        this.mySrc = "assets/img/golang-logo2.png";

                      }
          console.log(this.myApplication);
          this.updateViewsOnclick(row.softwareId);

        }
        updateViewsOnclick(id:String){
          this.softwareService.updateViews(id)
                     .subscribe(resp => {
                       console.log(resp.views);
                       this.postdata = resp;
                       this.ngOnInit();
                     });
        }


}

