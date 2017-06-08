import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//import * as $ from 'jquery';
import { NgSemanticModule } from 'ng-semantic/ng-semantic';
import { DataTableModule } from 'angular2-datatable';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { DataFilterPipe } from './data-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DataFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgSemanticModule,
    DataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
