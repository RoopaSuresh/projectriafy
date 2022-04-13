import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTerm = ''
  Name: any

  constructor(private ds: ServicesService) { }

  ngOnInit(): void {
  }

  searchWeb() {
    console.log('searchTerm', this.searchTerm);

  }

  search() {




    //asynchronous
    this.ds.search(this.Name)


      .subscribe((result: any) => {
        if (result) {
          alert(result.message)

        }
      },
        result => {
          alert(result.error.message)
        }
      )



  }















}
