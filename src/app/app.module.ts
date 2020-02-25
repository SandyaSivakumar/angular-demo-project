import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormElementComponent } from './form-element/form-element.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResultTableComponent } from './result-table/result-table.component';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { SoftwareServiceService } from './service/software-service.service';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import '@angular/compiler';
import { DescriptionTabComponent } from './description-tab/description-tab.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    FormElementComponent,
    NavbarComponent,
    ResultTableComponent,
    DescriptionTabComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    NgbModule
  ],
  providers: [SoftwareServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }



