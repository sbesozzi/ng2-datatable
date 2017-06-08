import { Component, OnInit } from '@angular/core';
import { DataFilterPipe } from '../data-filter.pipe';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public data = [
  {
    "name": "Wing",
    "email": "tellus.eu.augue@arcu.com",
    "regDate": "2016-01-09T14:48:34-08:00",
    "city": "Paglieta",
    "age": 25
  },
  {
    "name": "Whitney",
    "email": "sed.dictum@Donec.org",
    "regDate": "2017-01-23T20:09:52-08:00",
    "city": "Bear",
    "age": 32
  },
  {
    "name": "Oliver",
    "email": "mauris@Craslorem.ca",
    "regDate": "2015-11-19T19:11:33-08:00",
    "city": "Bruderheim",
    "age": 31
  }]

  public filterQuery = '';
  public rowsOnPage = 10;
  public sortBy = 'name';
  public sortOrder = 'asc';

  constructor() { }

  public toInt(num: string) {
      return +num;
  }

  public sortByWordLength = (a: any) => {
      return a.city.length;
  }


  ngOnInit() {
  }

}
